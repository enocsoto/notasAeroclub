import { request, response } from "express";
import userService from "../services/index.js";
const userController = {
    getUsers: async (req = request, res = response, next) => {
        const [result] = await userService.findAll();
        res.status(200).json({ data: result[0]})

    },
    getUserById: (req = request, res = response, next) => {


    },
    createUser: (req = request, res = response, next) => {


    },
    updateUser: (req = request, res = response, next) => {


    },
    deleteUser: (req = request, res = response, next) => {

    }

}
export default userController;