import { connection } from "../config/database.js"

const userService = {
    findAll: async () =>{
     const getUsers = await connection.query("SELECT * FROM usuarios");
     return getUsers;
    }
}
export default userService;