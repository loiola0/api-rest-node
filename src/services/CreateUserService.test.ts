import { getConnection } from 'typeorm';
import createConnection  from '../database';
import {CreateUserService} from './CreateUserService';
import {v4 as uuid} from 'uuid';


describe('CreateUserService', () => {
    
    beforeAll(async () => {
        const connection = await createConnection();
        
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();

        await connection.query('DELETE FROM users');

        connection.close();
    })

    it('Should return user id', async () =>{

        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: uuid(),
            name: 'Any user',
            email: 'Any email',
        })

        expect(result).toHaveProperty('id');
    })
})