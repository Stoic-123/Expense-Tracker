import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signUpShcema, loginSchema } from "../validation/expenseSchema.js";
import { signUpUser, loginUser } from "../controller/auth.js";
import { validate } from "../validation/validate.js";

const router = new Hono();

router.post("/signup", validate(signUpShcema), signUpUser);
router.post("/login", validate(loginSchema), loginUser);

export default router;
