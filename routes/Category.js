/**
 * @author Jigar Khalas 
 * @description It contains all routes for Category Collection.
 */

import express from "express"; 

import categorySchemaMiddleware from "../middlewares/Category.js";

import CategoryController from "../controllers/CategoryController.js";

import { verifyUser } from "../middlewares/User.js";

const router = express.Router(); 

router.post("/add",categorySchemaMiddleware,verifyUser,CategoryController.addCategory);

router.get("/display",verifyUser,CategoryController.displayCategory);

export default router ; 