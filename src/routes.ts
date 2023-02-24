import { Router, Request, Response } from "express";
import {CreateUserController} from './controllers/user/CreateUserController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello'});
})

router.post('/users', new CreateUserController().handle);

export {router}