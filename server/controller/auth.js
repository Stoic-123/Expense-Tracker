import { createUser, findUserByEmail } from "../model/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "hono/cookie";

const generateToken = (id, email, token_version) => {
  const payload = { id, email, token_version };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRED_AT || "2h",
  });
};

export const signUpUser = async (c) => {
  const { name, email, password } = await c.req.json();
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
  const { email, password } = await c.req.json();
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
