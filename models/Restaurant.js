/**
 * @author Jigar Khalas
 * @description Restaurant Model
 */

import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },

  contact: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        return /^[6-9]{1}[0-9]{9}/.test(value);
      },
      message: "Invalid Phone Number.",
    },
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },

  state: {
    type: String,
    required: true,
    trim: true,
  },

  city: {
    type: String,
    required: true,
    trim: true,
  },

  country: {
    type: String,
    required: true,
    trim: true,
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },

  logo: {
    type: String,
    required: true,
    trim: true,
  },
});

RestaurantSchema.index({ location: "2dsphere" });

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

export default RestaurantModel;
