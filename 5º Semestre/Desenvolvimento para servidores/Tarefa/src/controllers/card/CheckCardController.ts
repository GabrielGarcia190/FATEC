import { Response, Request } from 'express';
import { AuthCardService } from '../../services/card/AuthCardService';


class CheckCardController {
    async handle(req: Request, res: Response) {
        const { numero_cartao, cvv } = req.body;

        const authCardService = new AuthCardService();
        const token = await authCardService.execute({ numero_cartao, cvv });

        return res.json(token);
    }
}

export { CheckCardController }