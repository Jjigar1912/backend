/**
 * @author Jigar Khalas
 */

import express from "express";
import { verifyUser } from "../middlewares/User.js";
import { cusinSchemaMiddleware , cusinSchemaDeleteMiddleware , cusinSchemaUpdateMiddleware  } from "../middlewares/Cusin.js";
import CusinController from "../controllers/CusinController.js";

const router = express.Router();

router.post("/add",cusinSchemaMiddleware,verifyUser,CusinController.addCusin);

router.get("/display",verifyUser,CusinController.displayCusin);

router.delete("/delete",cusinSchemaDeleteMiddleware,verifyUser,CusinController.removeCusin);

router.put("/update",cusinSchemaUpdateMiddleware,verifyUser,CusinController.updateCusin);



export default router;