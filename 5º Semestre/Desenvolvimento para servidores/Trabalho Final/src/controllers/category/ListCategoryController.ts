//* Libraries imports

//* Local imports
import ListCategoryService from "../../services/category/ListCategoryService";

//* Types imports
import type { Request, Response } from "express";
/**
 * Create category controller class
 */

export default class ListCategoryController {
  public async handle(req: Request, res: Response) {
    const createUserService = new ListCategoryService();

    const category = await createUserService.execute();

    return res.json(category);
  }
}
