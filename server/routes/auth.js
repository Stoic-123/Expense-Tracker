import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  signUpShcema,
  loginSchema,
  otpSchema,
} from "../validation/expenseSchema.js";
import { signUpUser, loginUser, sendOtp } from "../controller/auth.js";
import { validate } from "../validation/validate.js";

const router = new Hono();

router.post("/signup", validate(signUpShcema), signUpUser);
router.post("/login", validate(loginSchema), loginUser);
router.post("/sendOtp", validate(otpSchema), sendOtp);
export default router;
