import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Alumno = db.define('alumnos', {
       name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    curso: {
        type: DataTypes.STRING
    },
    idAlumno: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
})

export default Alumno;