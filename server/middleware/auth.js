import { db } from "../config/db.js";
import jwt from "jsonwebtoken";
import { deleteCookie, getCookie } from "hono/cookie";

export const requireAuth = async (c, next) => {
  try {
    const token = getCookie(c, "auth_token");
    if (!token) {
      return c.json({ result: false, message: "Token is not defined..!" }, 404);
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const sql = "SELECT token_version FROM users WHERE id = ?";
    const [user] = await db.query(sql, [decodedToken.id]);

    if (!user.length) {
      await deleteCookie(c, "auth_token");
      return c.json({ error: "User no longer exists" }, 401);
    }

    if (user[0].token_version !== decodedToken.token_version) {
      await deleteCookie(c, "auth_token");
      return c.json({ error: "Session expired. Please login again" }, 401);
    }

    c.set("user", decodedToken); // now you can use c.get("user") in route handlers
    await next();
  } catch (error) {
    await deleteCookie(c, "auth_token");
    return c.json({ error: "Invalid or expired token" }, 401);
  }
};
