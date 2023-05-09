import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCartegoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute(name);

        return response.json(category);
    }
}

export { CreateCartegoryController }