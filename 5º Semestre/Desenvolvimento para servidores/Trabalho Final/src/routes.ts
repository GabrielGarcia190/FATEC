//* Libraries imports
import { Router } from "express";
import multer from "multer";

//* Config imports
import uploadConfig from "./config/multer";

//* Local imports
import CreateUserController from "./controllers/user/CreateUserController";
import DetailUserController from "./controllers/user/DetailUserController";
import AuthUserController from "./controllers/user/AuthUserController";
import CreateCategoryController from "./controllers/category/CreateCategoryController";
import ListCategoryController from "./controllers/category/ListCategoryController";
import CreateProductController from "./controllers/product/CreateProductController";
import ListByCategoryController from "./controllers/product/ListByCategoryController";
import ListByNameController from "./controllers/product/ListByNameController";
import CreateOrderController from "./controllers/order/CreateOrderController";
import RemoveOrderController from "./controllers/order/RemoveOrderController";
import RemoveItemController from "./controllers/order/RemoveItemController";
import AddItemController from "./controllers/order/AddItemController";
import ListOrderController from "./controllers/order/ListOrderController";
import OrderDetailsController from "./controllers/order/OrderDetailsController";
import SendOrderController from "./controllers/order/SendOrderController";
import CloseOrderController from "./controllers/order/CloseOrderController";
import isAuthenticated from "./middlewares/isAuthenticated";

const routes = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//* --------- Rotas para User --------- *//
routes.post("/user", new CreateUserController().handle);
routes.post("/session", new AuthUserController().handle);
routes.get("/userinfo", isAuthenticated, new DetailUserController().handle);

//* --------- Rotas para Category --------- *//
routes.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
routes.get("/category", isAuthenticated, new ListCategoryController().handle);

//* --------- Rotas para Product --------- *//
routes.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
routes.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

routes.get("/product", isAuthenticated, new ListByNameController().handle);

//* --------- Rotas para Order --------- *//
routes.post("/order", isAuthenticated, new CreateOrderController().handle);
routes.post("/order/additem", isAuthenticated, new AddItemController().handle);
routes.delete(
  "/order/:id",
  isAuthenticated,
  new RemoveOrderController().handle
);
routes.post("/order/item", isAuthenticated, new RemoveItemController().handle);
routes.get("/order/listall", isAuthenticated, new ListOrderController().handle);
routes.get(
  "/order/details",
  isAuthenticated,
  new OrderDetailsController().handle
);
routes.post("/order/send", isAuthenticated, new SendOrderController().handle);
routes.post("/order/close", isAuthenticated, new CloseOrderController().handle);

export { routes };
