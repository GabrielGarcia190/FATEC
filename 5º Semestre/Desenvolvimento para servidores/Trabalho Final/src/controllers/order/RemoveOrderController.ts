//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import RemoveOrderService from "../../services/order/RemoveOrderService";

const RemoveOrderSchema = z.object({
  id: z.string().uuid(),
});

export type RemoveOrderDTO = z.infer<typeof RemoveOrderSchema>;

export default class RemoveOrderController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = RemoveOrderSchema.parse(req.query);

      const removeOrderService = new RemoveOrderService();

      const order = await removeOrderService.execute({ id });

      return res.status(200).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: error.message,
        });
      } else {
        return res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  }
}
