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
