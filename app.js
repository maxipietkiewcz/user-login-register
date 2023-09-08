import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet'; 
import morgan from 'morgan';
import dotenv from 'dotenv';
import { db_conecction } from './src/config/database.js';
import {userRouter} from "./src/routes/user.routes.js"

const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

dotenv.config();

//Conectction to database
db_conecction();

//routes
app.use('/user', userRouter);



//Levantar el servidor
const puerto = process.env.PORT || 4000;
app.listen(puerto, () => {
  console.log("El server esta conectado en http://localhost:" + puerto + "/ ");
});
