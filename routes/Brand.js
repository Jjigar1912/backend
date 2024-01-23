/**
 * @author Jigar Khalas 
 * @description Brand Routes
 */

import express from "express"; 
import BrandController from "../controllers/BrandController.js";
import { addBrandMiddleware , removeBrandMiddleware , updateBrandMiddleware } from "../middlewares/Brand.js";
import { verifyUser } from "../middlewares/User.js";

const router = express.Router();

router.post("/add",addBrandMiddleware,verifyUser,BrandController.addBrand);

router.get("/display",verifyUser,BrandController.displayBrand);

router.delete("/delete",removeBrandMiddleware,verifyUser,BrandController.removeBrand);

router.put("/update",updateBrandMiddleware,verifyUser,BrandController.updateBrand);

export default router ; 