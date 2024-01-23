/**
 * @author Jigar Khalas
 */

import express from "express";
import FoodController from "../controllers/FoodController.js";
import { verifyUser } from "../middlewares/User.js";
import { foodSchemaMiddleware } from "../middlewares/Food.js";

const router = express.Router();

router.post("/add", foodSchemaMiddleware, verifyUser, FoodController.addFood);

router.get("/display", verifyUser, FoodController.displayFood);

export default router;
