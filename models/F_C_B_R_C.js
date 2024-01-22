/**
 * @author Jigar Khalas
 * @description Mapping Table For Food , Category , Brand , Restaurant , Cusin 
 */

import mongoose from "mongoose";

const schema = new mongoose.Schema({

    category_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Category"
    }, 

    brand_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Brand"
    }, 

    restaurant_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Restaurant"
    }, 

    cusin_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Cusin"
    }, 

    food_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Food"
    }

})

const food_category_brand_restaurant_category_model = mongoose.model("Food_Category_Brand_Restaurant_Category",schema);

export default food_category_brand_restaurant_category_model;