import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

type PayLoad = {
    sub: string;
}
const { JWT_SECRET } = process.env;

export function isAuthorezed(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Verificar se o usuário está autenticado
    const authToken = req.headers.authorization;

    if (!authToken) {
        // return res.status(401).end();
        return res.status(401).json({
            errorCode: "token.invalid",
        });
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(
            token,
            String(JWT_SECRET)
        ) as PayLoad;

        req.card_id = sub;

        console.log(sub);
        return next();
    }
    catch (error) {
        return res.status(401).end();
    }
}