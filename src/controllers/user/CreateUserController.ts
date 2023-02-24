import { Request, Response } from "express";
import {CreateUserService} from '../../services/CreateUserService';

class CreateUserController{
    handle(req: Request, res: Response){

        const {name, email} = req.body;

        if (name.length === 0 || email.length === 0){
            return res.status(400).json({
                message: "Name or email is required"
            });
        }

        const createUserService = new CreateUserService();

        const user = createUserService.execute({name, email});

        return res.status(201).json(user);
    }
}

export {CreateUserController}