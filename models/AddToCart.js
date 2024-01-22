/**
 * @author Jigar Khalas
 * @description Add To Cart Model 
 */

import mongoose from "mongoose";

const addToCartSchema = new mongoose.Schema({

    Category_Brand_Cusin_Restaurant_FoodId : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Food_Category_Brand_Restaurant_Category"
    } , 

    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "User"
    } , 

    created_At : {
        type : Date , 
        default : new Date() , 
        required : true 
    }

})

const AddToCartModel = mongoose.model("AddToCart",addToCartSchema);

export default AddToCartModel ; 