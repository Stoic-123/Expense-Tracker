import { Hono } from "hono";
import { signUpUser, loginUser } from "../controller/auth.js";

const router = new Hono();

router.post("/signup", signUpUser);
router.post("/login", loginUser);

export default router; 
