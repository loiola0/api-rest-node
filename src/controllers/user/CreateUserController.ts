import { Request, Response } from 'express';
import {CreateUserService} from '../../services/CreateUserService';
import {v4 as uuid} from 'uuid';

class CreateUserController{
    async handle(req: Request, res: Response){

            const {name, email} = req.body;

            if (!name || /^\s*$/.test(name)){
                return res.status(400).json({
                    message: "Name is required"
                });
            }

            const id = uuid();
            
            const createUserService = new CreateUserService();

            const user = await createUserService.execute({id, name, email});

            return res.status(201).json(user);
    }
}

export {CreateUserController}