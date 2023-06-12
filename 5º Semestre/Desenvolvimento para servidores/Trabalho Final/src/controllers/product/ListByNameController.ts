//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import ListByNameService from "../../services/product/ListByNameService";

const ListByNameSchema = z.object({
  name: z.string(),
});

export type ListByName = z.infer<typeof ListByNameSchema>;

export default class ListByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;
    try {
      const category = ListByNameSchema.parse({ name });

      const listByCategoryService = new ListByNameService();

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
