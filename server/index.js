import { Hono } from "hono";
import { logger } from "hono/logger";
import authRouter from "./routes/auth.js";
import expenseRouter from "./routes/expense.js";
const app = new Hono();
app.use("*", logger());
app.route("/auth", authRouter);
app.route("/expense", expenseRouter);
app.get("/", (c) => {
  return c.json({ result: true, message: "Hello kimlong this is hono + bun" });
});
export default {
  port: 3030,
  fetch: app.fetch,
};
