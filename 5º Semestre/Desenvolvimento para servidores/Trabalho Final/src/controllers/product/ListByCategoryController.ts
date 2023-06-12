//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import ListByCategoryService from "../../services/product/ListByCategoryService";

const ProductCategorySchema = z.object({
  id_category: z.string().uuid(),
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;

export default class ListByCategoryController {
  async handle(request: Request, response: Response) {
    const { id_category } = request.query;
    try {
      const category = ProductCategorySchema.parse({ id_category });

      const listByCategoryService = new ListByCategoryService();

      const products = await listByCategoryService.execute(category);

      return response.json(products);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.errors });
      } else {
        return response.status(500).json({ error: "Server error" });
      }
    }
  }
}
