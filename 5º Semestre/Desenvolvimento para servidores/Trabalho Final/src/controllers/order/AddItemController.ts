//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import AddItemService from "../../services/order/AddItemService";

const AddItemSchema = z.object({
  quantity: z.number().positive(),
  orderId: z.string().uuid(),
  productId: z.string().uuid(),
});

export type AddItemRequest = z.infer<typeof AddItemSchema>;

export default class AddItemController {
  async handle(request: Request, response: Response) {
    try {
      const { quantity, orderId, productId } = AddItemSchema.parse(request.body);

      const addItemService = new AddItemService();

      const item = await addItemService.execute({ quantity, orderId, productId });

      return response.status(201).json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.errors });
      } else {
        return response.status(500).json({ error: "Server error" });
      }
    }
  }
}
