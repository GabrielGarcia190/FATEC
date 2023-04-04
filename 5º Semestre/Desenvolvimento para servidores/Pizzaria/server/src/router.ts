import { Router, Request, Response, NextFunction } from 'express';
import 'express-async-errors';


const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    throw new Error('Erro ao fazer requisição');
    // return res.json({ nome: 'eduardo' })

}); 

export default router;
