import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticaded';
import { DetailUserController } from './controller/user/DefailtUserController';
import { CreateCartegoryController } from './controller/category/CreateCategoryController';

const router = Router();

// -----------ROTAS PARA USER ---------------//
router.post('/user', new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

router.get("/caregory", isAuthenticated, new CreateCartegoryController().handle);

export { router };
