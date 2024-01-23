/**
 * @author Jigar Khalas
 */

import FoodModel from "../models/Food.js";
import User_restaurant_model from "../models/Restaurant_User.js";
import food_category_brand_restaurant_category_model from "../models/F_C_B_R_C.js";

class FoodController {
  static async addFood(req, res) {
    try {
      const { restaurant_id } = await User_restaurant_model.findOne({
        user_id: req.body.user_id,
      });

      const newFood = new FoodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        foodImage: req.body.images,
        rating: req.body.rating,
      });

      const data = await newFood.save();

      const newRecord = new food_category_brand_restaurant_category_model({
        food_id: data._id,
        restaurant_id,
        category_id: req.body.category_id,
        brand_id: req.body.brand_id,
        cusin_id: req.body.cusin_id,
      });

      await newRecord.save();

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async displayFood(req, res) {
    try {
      const { restaurant_id } = await FoodModel.findOne({
        user_id: req.body.user_id,
      });

      const data = await food_category_brand_restaurant_category_model
        .find({ restaurant_id })
        .populate("category_id")
        .populate("food_id")
        .populate("brand_id")
        .populate("cusin_id");

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteFood(req, res) {
    try {
      const { restaurant_id } = await User_restaurant_model.findOne({
        user_id: req.body.user_id,
      });

      const existing =
        await food_category_brand_restaurant_category_model.findOne({
          restaurant_id,
          food_id: req.body.food_id,
        });

      if (existing) {
        const response =
          await food_category_brand_restaurant_category_model.deleteOne({
            _id: existing._id,
          });

        return res.status(200).json(response);
      } else {
        return res.status(404).json({ info: "Food Not Found." });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async updateFood(req, res) {}
}

export default FoodController;
