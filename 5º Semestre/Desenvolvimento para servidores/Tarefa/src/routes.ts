import { Response, Router, Request } from 'express';
import { CreateCardController } from "./controllers/card/CreateCardController";
import { CheckCardController } from './controllers/card/CheckCardController';
import { AuthorizeOrderController } from './controllers/card/AuthorizeOrderController';
import { isAuthorezed } from './middlewares/isAuthorezed';


const router = Router();

router.get('/teste', (request: Request, response: Response) => {
    return response.json({ message: 'Opa, blz?' });
})
router.post('/cards', new CreateCardController().handle);

router.post("/authcard", new CheckCardController().handle);


router.get("/authorizeorder", isAuthorezed, new AuthorizeOrderController().handle);

export {router}