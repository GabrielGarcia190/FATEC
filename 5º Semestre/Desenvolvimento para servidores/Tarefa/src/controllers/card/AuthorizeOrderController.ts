import { Request, Response } from "express";
import { AuthorizeOrderService } from "../../services/card/AuthorizeOrderService";

class AuthorizeOrderController {
    async handle(req: Request, res: Response) {
        const card_id = req.card_id;

        console.log(card_id)
        const authorizeOrderController = new AuthorizeOrderService();
        const card = await authorizeOrderController.execute(card_id);

        return res.json(card);
    }
}

export { AuthorizeOrderController }