/**
 * @author Jigar Khalas
 * @description It contains all routes for Category Collection.
 */

import express from "express";

<<<<<<< HEAD
<<<<<<< HEAD
import { categorySchemaMiddleware , categoryDeleteMiddleware , categoryUpdateMiddleware } from "../middlewares/Category.js";
=======
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
import {
  categorySchemaMiddleware,
  categoryDeleteMiddleware,
  categoryUpdateMiddleware,
} from "../middlewares/Category.js";
<<<<<<< HEAD
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a

import CategoryController from "../controllers/CategoryController.js";

import { verifyUser } from "../middlewares/User.js";

const router = express.Router();

router.post(
  "/add",
  categorySchemaMiddleware,
  verifyUser,
  CategoryController.addCategory
);

router.get("/display", verifyUser, CategoryController.displayCategory);
<<<<<<< HEAD
<<<<<<< HEAD

router.delete("/delete",categoryDeleteMiddleware,verifyUser,CategoryController.deleteCategory);

router.put("/update",categoryUpdateMiddleware,verifyUser,CategoryController.updateCategory);
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a

=======

>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
router.delete(
  "/delete",
  categoryDeleteMiddleware,
  verifyUser,
  CategoryController.deleteCategory
);

router.put(
  "/update",
  categoryUpdateMiddleware,
  verifyUser,
  CategoryController.updateCategory
);

export default router;
