import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';

const router = Router();

// -----------ROTAS PARA USER ---------------//
router.post('/user', new CreateUserController().handle)

export { router };
