import { email } from "zod";
import { db } from "../config/db.js";

export const createUser = async (name, email, hashPassword) => {
  const sql = "INSERT INTO users (name,email,password) VALUE(?,?,?)";
  const [rows] = await db.query(sql, [name, email, hashPassword]);
  return {
    id: rows.insertId,
    name,
    email,
  };
};
export const findUserByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email =?";
  const [rows] = await db.query(sql, [email]);
  return rows[0];
};
export const insertOtp = async (email, otp, expireAt) => {
  const sql =
    "INSERT INTO otp_codes (user_id, otp_code, expires_at) VALUE(?,?,?)";
  const [rows] = await db.query(sql, [email, otp, expireAt]);
  return {
    id: rows.insertId,
  };
};
export const findOtpByUserId = async (userId, otp) => {
  const sql = `SELECT * FROM otp_codes WHERE user_id =? AND otp_code =? ORDER BY created_at DESC LIMIT 1`;
  const [rows] = await db.query(sql, [userId, otp]);
  return rows[0];
};
export const markOTPAsVerified = async (otpId) => {
  const sql = `UPDATE otp_codes SET is_verified = 1 WHERE id=?`;
  const [rows] = await db.query(sql, [otpId]);
  return rows.affectedRows > 0;
};
export const checkOtpVerify = async (id) => {
  const sql = `SELECT * FROM otp_codes WHERE user_id =? AND is_verified = 1 ORDER BY created_at DESC LIMIT 1`;
  const [rows] = await db.query(sql, [id]);
  return rows[0];
};
export const updatePassword = async (newPassword, id) => {
  const sql = `UPDATE users SET password =? WHERE id=?`;
  const [rows] = await db.query(sql, [newPassword, id]);
  return rows.affectedRows > 0;
};
export const deleteOtp = async (userId) => {
  const sql = `DELETE FROM otp_codes WHERE user_id=?`;
  const [rows] = await db.query(sql, [userId]);
  return rows.affectedRows > 0;
};
