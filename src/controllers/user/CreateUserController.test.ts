import { CreateUserController } from "./CreateUserController";
import { Request } from "express";
import createConnection from '../../database'
import { makeMockResponse } from "../../utils/mocks/mockResponse";
import { getConnection } from "typeorm";


describe('CreateUserController', () => {

    beforeAll(async () => {
        const connection = await createConnection();

        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();

        await connection.query('DELETE FROM users');
        
        await connection.close();
    })

    const createUserController = new CreateUserController();
    
    const response = makeMockResponse();

    it('should return status 201 when user created', async () => {
        const request = {
                    body: {
                        name: 'test 01',
                        email: 'test01@gmaill.com'
                        }
        } as Request

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    });

    it('should return status 400 when user created', async () => {
        const request = {
                    body: {
                        name: '',
                        email: 'test01@gmaill.com'
                        }
        } as Request

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    });
    
    it('should return status 201 when email is empty', async () => {
        const request = {
                    body: {
                        name: 'Fulano',
                        email: ''
                        }
        } as Request

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    });
});