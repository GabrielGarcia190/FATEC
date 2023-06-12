//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import RemoveItemService from "../../services/order/RemoveItemService";

const removeItemSchema = z.object({
  orderId: z.string().uuid(),
  itemId: z.string().uuid(),
});

export type RemoveItemRequest = z.infer<typeof removeItemSchema>;

export default class RemoveItemController {
  async handle(request: Request, response: Response) {
    try {
      const { orderId, itemId } = removeItemSchema.parse(request.body);

      const removeItemService = new RemoveItemService();

      const result = await removeItemService.execute({ orderId, itemId });

      return response.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error?.errors });
      }
      return response.status(400).json({ error: error?.message });
    }
  }
}
