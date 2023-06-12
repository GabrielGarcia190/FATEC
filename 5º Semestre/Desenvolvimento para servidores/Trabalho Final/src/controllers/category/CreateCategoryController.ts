//* Libraries imports
import z from "zod";

//* Local imports
import CreateCategoryService from "../../services/category/CreateCategoryService";

//* Types imports
import type { Request, Response } from "express";

const categorySchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must be at most 255 characters long"),
});

export type CategoryZod = z.infer<typeof categorySchema>;
/**
 * Create category controller class
 */

export default class CreateCategoryController {
  public async handle(req: Request, res: Response) {
    try {
      const tmpCategory = categorySchema.parse(req.body);
      const createUserService = new CreateCategoryService();

      const category = await createUserService.execute(tmpCategory);

      return res.json(category);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid information", details: error.errors });
      }
    }
  }
}
