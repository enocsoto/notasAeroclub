import db  from "../config/database.js";

const authservice ={
    signin: async (id)=>{

        const emailuser = await connection.query(`SELECT * FROM alumnos WHERE email = ${id};`);
        console.log(emailuser);
        
        

    }

}
export default authservice;