//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import CreateProductService from "../../services/product/CreateProductService";

const productSchema = z.object({
  name: z.string().min(3).max(255),
  price: z.string(),
  description: z.string().min(3).max(255),
  categoryId: z.string(),
});

type ProductRequest = z.infer<typeof productSchema>;
export type ProductToAdd = ProductRequest & { banner: string };

export default class CreateProductController {
  async handle(req: Request, res: Response) {
    const parsedBody = productSchema.parse(req.body);

    if (!req.file) return res.status(400).json({ error: "File is missing" });
    else {
      const { originalname, filename } = req.file;

      const productToAdd: ProductToAdd = {
        ...parsedBody,
        banner: filename,
      };

      const createProductService = new CreateProductService().execute(
        productToAdd
      );

      return res.status(201).json(createProductService);
    }
  }
}
