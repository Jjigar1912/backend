/**
 * @author Jigar Khalas 
 * @description Restaurant Routes 
 */

import express from "express" ;
import RestaurantController from "../controllers/RestaurantController.js";
import { verifyUser } from "../middlewares/User.js";
import { restaurantSchemaMiddleware } from "../middlewares/Restaurant.js";

const router = express.Router(); 

router.post("/add",restaurantSchemaMiddleware,verifyUser,RestaurantController.addRestaurantController);

export default router;