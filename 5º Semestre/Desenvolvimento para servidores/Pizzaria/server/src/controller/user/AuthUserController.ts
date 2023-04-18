import { Response, Request } from 'express';
import { AuthUserService } from '../../services/user/AuthUserServices';


class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const authUserService = new AuthUserService();
        const token = await authUserService.execute({ email, senha });

        return res.json(token);
    }
}

export { AuthUserController }