import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { AuthUserController } from './controller/user/AuthUserController';

const router = Router();

// -----------ROTAS PARA USER ---------------//
router.post('/user', new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

export { router };
