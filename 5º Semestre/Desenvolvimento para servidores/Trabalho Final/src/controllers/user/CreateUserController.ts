//* Libraries imports
import z from "zod";

//* Local imports
import CreateUserService from "../../services/user/CreateUserService";

//* Types imports
import type { Request, Response } from "express";

const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must be at most 255 characters long")
    .refine((value) => value !== "admin", "Name cannot be admin"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(255, "Password must be at most 255 characters long"),
});

export type UserZod = z.infer<typeof userSchema>;
/**
 * Create user controller class
 */

export default class CreateUserController {
  public async handle(req: Request, res: Response) {
    try {
      const tmpUser = userSchema.parse(req.body);
      const createUserService = new CreateUserService();
      const user = await createUserService.execute(tmpUser);

      return res.json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid credentials", details: error.errors });
      }
    }
  }
}
