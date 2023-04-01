import express from "express";
import envs from '../config/env-config.js'
import db from '../config/database.js'
import { alumnos, auth } from "../routes/index.js";

class Server {

    constructor(){
        this.app = express();
        this.port = envs.port;

        this.dbConnection();
        this.middlewares();
        this.routes();
       
    }
    async dbConnection(){
        try {
            await db.authenticate();
            console.log(`Database Online`);
        } catch (error) {
            console.log(error);
            throw new Error(`Error al conectar con Db`)
        }
    }

    middlewares(){
        this.app.use(express.json());
        
    }

    routes(){
        this.app.use('/api', alumnos);
        this.app.use('/auth', auth);
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listen on port ${this.port}`);
        })
    }
}
export default Server;