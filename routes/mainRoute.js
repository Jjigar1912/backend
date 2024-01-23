/**
 * @author Jigar Khalas 
 * @description All routes are combined here . 
 */

import express from "express";
import UserRoutes from "./User.js";
import RestaurantRoutes from "./restaurant.js";
import CategoryRoutes from "./Category.js"
import uploadImageRoutes from "./UploadImage.js";
import BrandRoutes from "./Brand.js";
import CusinRoutes from "./Cusin.js";
import foodRoutes from "./food.js";

const router = express.Router(); 

router.use("/user",UserRoutes);
router.use("/restaurant",RestaurantRoutes);
router.use("/category",CategoryRoutes);
router.use("/",uploadImageRoutes);
router.use("/brand",BrandRoutes);
router.use("/cusin",CusinRoutes);
router.use("/food",foodRoutes);

export default router ; 