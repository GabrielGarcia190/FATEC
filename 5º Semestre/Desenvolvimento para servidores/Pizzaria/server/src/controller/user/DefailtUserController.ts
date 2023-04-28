import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{
    async handle(req: Request, res: Response){
        const detailuserService = new DetailUserService();
        const user = await detailuserService.execute();

        return res.json(user);
    }
}

export {DetailUserController}