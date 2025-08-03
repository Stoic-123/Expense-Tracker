import {
  createUser,
  findUserByEmail,
  insertOtp,
  findOtpByUserId,
  markOTPAsVerified,
  checkOtpVerify,
  updatePassword,
  deleteOtp,
} from "../model/auth.js";
import { transporter } from "../mailtrap/mailtrap.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "hono/cookie";
import dotenv from "dotenv";
dotenv.config();
const generateToken = (id, email, token_version) => {
  const payload = { id, email, token_version };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRED_AT || "2h",
  });
};

export const signUpUser = async (c) => {
  const { name, email, password } = await c.req.valid("json");
  if (!name || !email || !password) {
    return c.json({ error: "All fields are required" }, 400);
  }
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return c.json({ result: false, message: "Email is already taken..!" }, 400);
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await createUser(name, email, hashPassword);
  return c.json(
    {
      result: true,
      message: "User created successfully...",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    },
    200
  );
};

export const loginUser = async (c) => {
  const { email, password } = await c.req.valid("json");
  if (!email || !password) {
    return c.json(
      { result: false, message: "Email and password required" },
      400
    );
  }
  const existingUser = await findUserByEmail(email);
  if (!existingUser) {
    return c.json(
      { result: false, message: "User not found with this email" },
      400
    );
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    return c.json(
      {
        result: false,
        message: "Invalid password, please try again...!",
      },
      401
    );
  }
  const token = generateToken(
    existingUser.id,
    existingUser.email,
    existingUser.token_version
  );
  await setCookie(c, "auth_token", token, {
    maxAge: 3 * 24 * 60 * 60,
    httpOnly: true,
    secure: false, // true if using HTTPS
    sameSite: "lax",
  });

  return c.json({ result: true, token, message: "Login successfully.." });
};
export const sendOtp = async (c) => {
  const { email } = await c.req.valid("json");
  try {
    const users = await findUserByEmail(email);
    if (!users) {
      return c.json(
        { result: false, message: "User data is not defined..!" },
        404
      );
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);
    await insertOtp(users.id, otp, expiresAt);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });
    return c.json(
      { result: true, message: "OTP have been send to your email.." },
      200
    );
  } catch (error) {
    return c.json({ result: false, message: error.message }, 500);
  }
};
export const verifyOtp = async (c) => {
  const { email, otp } = await c.req.json();
  try {
    const users = await findUserByEmail(email);
    if (!users) {
      return c.json(
        { result: false, message: "User data is not defined..!" },
        404
      );
    }
    const user_id = users.id;
    const otpRows = await findOtpByUserId(user_id, otp);
    if (!otpRows) {
      return c.json(
        { result: false, message: "OTP CODE is not defined..!" },
        404
      );
    }
    if (new Date(otpRows.expires_at) < new Date()) {
      return c.json({ result: false, message: "This OTP expired..!" }, 500);
    }
    await markOTPAsVerified(otpRows.id);
    return c.json({ result: true, message: "OTP have been verifying.." });
  } catch (error) {
    return c.json({ result: false, message: error.message }, 500);
  }
};
export const resetPassword = async (c) => {
  const { email, newPassword } = await c.req.json();
  try {
    const users = await findUserByEmail(email);
    if (!users) {
      return c.json({ result: false, message: "User data is not defined..!" });
    }
    const checkOtp = await checkOtpVerify(users.id);
    if (!checkOtp) {
      return c.json(
        { result: false, message: "OTP is not verify yet..!" },
        500
      );
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);
    await updatePassword(hashPassword, users.id);
    await deleteOtp(users.id);
    return c.json({ result: true, message: "Password reset successfully.." });
  } catch (error) {
    return c.json({ result: false, message: error.message }, 500);
  }
};
