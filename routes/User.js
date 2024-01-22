/**
 * @author Jigar Khalas 
 * @description User Routes [ login , logout ]
 */

import express from "express";
import UserController from "../controllers/UserController.js";
import { userSchemaValidateMiddleware , generateHashPassword , loginMiddleware } from "../middlewares/User.js"; 


const router = express.Router();

router.post("/login",loginMiddleware,UserController.loginController);

router.post("/register",userSchemaValidateMiddleware,generateHashPassword,UserController.registerController);

export default router ;