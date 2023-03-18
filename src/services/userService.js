import { connection } from "../config/database.js"
import { v4 as uuidv4 } from 'uuid'
import userEnity from '../entities/index.js'
const userService = {
    create: async (user = userEnity) => {
        try {
            const [emailDistint] = await connection.query(`SELECT DISTINCT(email) FROM usuarios`);
            emailDistint.map((item) => {
                if (item.email === user.email) {
                    
                    throw new Error(`El correo ${user.email} ya está reguistrado`);
                }
            });
            const getUserbyID = await connection.query(`INSERT INTO usuarios (id, name, lastname, address, email, password) VALUES ('${uuidv4()}', '${user.name}', '${user.lastname}', '${user.address}', '${user.email}', '${user.password}');`);
            return user;

        } catch (error) {
            throw new Error(error);
        }
    },
    delete: async (id) => {
        try {
            const deleteUser = await connection.query(`DELETE FROM usuarios WHERE (id = '${id}');`);
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
            const getUserById = await connection.query(`SELECT * FROM usuarios WHERE id = ${id};`);
            if (!getUserById[0].length) {
                await connection.end();
                return console.log(`no se encontro usuario con id: ${id}`);

            }
            await connection.end();
            return getUserById;
        } catch (error) {
            await connection.end();
            throw new Error(error);
        }
    },

    findAll: async () => {
        try {
            const getUsers = await connection.query("SELECT * FROM usuarios");
            if (!getUsers[0].length) {
                return console.log(`Don't Users exist  in DB`, error);
            }
            await connection.end();
            return getUsers;
        } catch (error) {
            await connection.end();
            throw new Error(error)
        }
    },

    update: async (id, user = userEnity) => {
        try {
            const updatedUser = await connection.query(`UPDATE usuarios SET name = '${user.name}', lastname = '${user.lastname}', address = '${user.address}', email = '${user.email}', password = '${user.password}' WHERE (id = '${id}');`);
            return user;
        } catch (error) {
            throw new Error`No se actualizó el Usuario`;
        }
    }



}
export default userService;
userService.find(1).then(console.log);