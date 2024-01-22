/**
 * @author Jigar Khalas
 * @description Category and Restaurant Model
 */

import mongoose from "mongoose";

const Category_Restaurant_Schema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Category",
  },

  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },

  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category_Restaurant_Model = mongoose.model(
  "Category_Restaurant",
  Category_Restaurant_Schema
);

export default Category_Restaurant_Model;
