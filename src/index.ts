import express from 'express';
import {router} from './routes';
import createConnection from './database'

//createConnection();
createConnection();

const server = express();

server.use(express.json());
server.use(router);

server.listen(3333, () => console.log('server on port 3333'));