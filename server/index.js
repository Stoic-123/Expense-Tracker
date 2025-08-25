import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import authRouter from "./routes/auth.js";
import expenseRouter from "./routes/expense.js";
import "dotenv/config";
const isProduction = process.env.NODE_ENV === "production";
const app = new Hono();
app.use("*", logger());
if (!isProduction) {
  app.use(
    "*",
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
  console.log(isProduction);
}
app.route("/auth", authRouter);
app.route("/expense", expenseRouter);
export default {
  port: 5000,
  fetch: app.fetch,
};
