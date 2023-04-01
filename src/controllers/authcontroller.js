import { request, response } from "express";
import authservice from "../services/authservices.js";

export const authController = {

    singup:async (req = request, res= response) => {
        const {id} = req.body;
        const login = await authservice.signin(id);
       console.log(login);
        res.json({msg: 'singup'})

    },

    register: async (req = request, res= response)=>{


    }
}
