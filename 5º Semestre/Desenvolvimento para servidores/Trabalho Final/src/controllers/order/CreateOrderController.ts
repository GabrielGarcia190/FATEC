//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import CreateOrderService from "../../services/order/CreateOrderService";

const CreateOrderSchema = z.object({
  table: z.number().positive(),
  name: z.string().nonempty(),
});

export type CreateOrderType = z.infer<typeof CreateOrderSchema>;

export default class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { table, name } = request.body;

    try {
      await CreateOrderSchema.parseAsync({ table, name });

      const createOrderService = new CreateOrderService();

      const order = await createOrderService.execute({ table, name });

      return response.json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.errors });
      } else {
        return response.status(500).json({ error: "Server errors" });
      }
    }
  }
}
