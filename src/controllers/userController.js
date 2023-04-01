import { request, response } from "express";
import userService from "../services/index.js";
const userController = {

    createUser: async (req = request, res = response) => {
        try {
            const user = req.body;
            const result = await userService.create(user);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            });
        }
    },

    deleteUser: async (req = request, res = response) => {
        try {
            const id = req.params.id;

            const result = await userService.delete(id);
            res.status(202).json({
                msg: `Usuario eliminado: ${id}`
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message
            });
        }
    },

    getUserById: async (req = request, res = response, next) => {
        try {
            const id = req.params.id;
            const result = await userService.find(id);
            res.json({ user: result[0] });
        } catch (error) {
            res.status(500).json({
                msg: error.message
            });
        }
    },

    getUsers: async (req = request, res = response) => {
        const result = await userService.findAll();
        console.log(result);
        res.status(200).json({ data: result });
    },

    updateUser: async (req = request, res = response) => {
        try {
            const id = req.params.id;
            const result = await userService.update(id);
            res.json({ data: result[0] });
        } catch (error) {
            res.status(500).json({
                msg: error.message
            });
        }
    }
}
export default userController;