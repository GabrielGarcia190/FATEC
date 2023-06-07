import { Router } from 'express';
import multer from 'multer';
import uploadconfig from './config/multer';

import { CreateUserController } from './controller/user/CreateUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticaded';
import { DetailUserController } from './controller/user/DefailtUserController';
import { CreateCartegoryController } from './controller/category/CreateCategoryController';
import { ListCategoryController } from './controller/category/ListCaregotyControllers';

const router = Router();
const upload = multer(uploadconfig.upload("./tmp"))

// -----------ROTAS PARA USER ---------------//
router.post('/user', new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

router.post("/category", isAuthenticated, new CreateCartegoryController().handle);

router.get("/listcategory", isAuthenticated, new ListCategoryController().handle);

router.post("/product", isAuthenticated, upload.single("file"));

export { router };
