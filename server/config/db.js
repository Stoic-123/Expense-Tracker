import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
