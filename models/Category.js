/**
 * @author Jigar Khalas
 * @description Category Model
 */

import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  code: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
