import { Response, Router, Request } from 'express';

const router = Router();

router.get('/teste', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World' });
})

export {router}