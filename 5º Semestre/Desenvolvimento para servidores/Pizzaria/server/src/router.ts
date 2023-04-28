import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticaded';
import { DetailUserController } from './controller/user/DefailtUserController';

const router = Router();

// -----------ROTAS PARA USER ---------------//
router.post('/user', new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

export { router };
