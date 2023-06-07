import { ListCategoryService } from "../../services/category/ListCategoryService";
import type { Request, Response } from "express";


class ListCategoryController {
    public async handle(req: Request, res: Response) {
        const createUserService = new ListCategoryService();

        const category = await createUserService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }