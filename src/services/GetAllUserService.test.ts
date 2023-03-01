import { getConnection } from "typeorm";
import createConnection  from "../database";
import { CreateUserService } from "./CreateUserService";
import {v4 as uuid} from 'uuid';
import { GetAllUserService } from "./GetAllUserService";

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();

        connection.runMigrations();
    })

    afterAll(async () => {
        const connection = await getConnection();

        await connection.query('DELETE FROM users');

        await connection.close();
    })

    const createUserService = new CreateUserService();

    const getAllUserService = new GetAllUserService();

    it('Should return all users', async () => {

        const expectedResponse = [
            {
                name: 'Any user',
                email: 'anyuser@example.com'},
            {
                name: 'Any other user',
                email: 'anyotheruser@example.com'
            }
        ];

        await createUserService.execute({
            id: uuid(),
            name: 'Any user',
            email: 'anyuser@example.com'
        });

        await createUserService.execute({
            id: uuid(),
            name: 'Any other user',
            email: 'anyotheruser@example.com'
        });

        const users = await getAllUserService.execute();

        expect(users).toMatchObject(expectedResponse);
    })
})