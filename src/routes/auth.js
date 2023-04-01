import { Router } from "express";
import { authController } from "../controllers/authcontroller.js";

const router = Router();

router.post('/', authController.singup )

export default router;