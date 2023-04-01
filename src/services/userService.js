import { v4 as uuidv4 } from 'uuid'
import bcrypt from "bcryptjs";
import db from "../config/database.js"
import Alumno from "../models/alumno.js";

const userService = {
    create: async (user = userEnity) => {
        try {
            const [emailDistint] = await db.query(`SELECT DISTINCT(email) FROM alumnos`);
            emailDistint.map((item) => {
                if (item.email === user.email) {
                    
                    throw new Error(`El correo ${user.email} ya está reguistrado`);
                }
            });
            const salt = bcrypt.genSaltSync(8);

            user.password =  bcrypt.hashSync(user.password, salt);
            const getUserbyID = await db.query(`INSERT INTO alumnos (id, name, lastname, address, email, password) VALUES ('${uuidv4()}', '${user.name}', '${user.lastname}', '${user.address}', '${user.email}', '${user.password}');`);
            return user;

        } catch (error) {
            throw new Error(error);
        }
    },
    delete: async (id) => {
        try {
            const deleteUser = await db.query(`DELETE FROM alumnos WHERE (id = '${id}');`);
            if (!deleteUser[0].length) {
                return console.log(`No se encontro usuario por eliminar en DB con id ${id}`);
            }
            return deleteUser;
        } catch (error) {
            throw new Error(error);
        }

    },

    find: async (id) => {
        try {
            const getUserById = await db.query(`SELECT * FROM alumnos WHERE id = ${id};`);
            if (!getUserById[0].length) {
                await db.end();
                return console.log(`no se encontro usuario con id: ${id}`);

            }
            
            return getUserById;
        } catch (error) {
            
            throw new Error(error);
        }
    },

    findAll: async () => {
        try {
            const getUsers = await Alumno.findAll();
            if (!getUsers[0].length) {
                return console.log(`Don't Users exist  in DB`);
            }
         return getUsers;
        } catch (error) {
           throw new Error(error)
        }
    },

    update: async (id, user = userEnity) => {
        try {
            const updatedUser = await db.query(`UPDATE alumnos SET name = '${user.name}', lastname = '${user.lastname}', address = '${user.address}', email = '${user.email}', password = '${user.password}' WHERE (id = '${id}');`);
            return user;
        } catch (error) {
            throw new Error`No se actualizó el Usuario`;
        }
    }



}
export default userService;
