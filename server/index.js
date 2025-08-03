import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import authRouter from "./routes/auth.js";
import expenseRouter from "./routes/expense.js";
const app = new Hono();
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.route("/auth", authRouter);
app.route("/expense", expenseRouter);
export default {
  port: 3030,
  fetch: app.fetch,
};
