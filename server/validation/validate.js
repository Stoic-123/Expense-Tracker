import { zValidator } from "@hono/zod-validator";

export const validate = (schema) =>
  zValidator("json", schema, (result, c) => {
    if (!result.success) {
      const issues = result.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));

      return c.json({ success: false, errors: issues }, 400);
    }
  });
