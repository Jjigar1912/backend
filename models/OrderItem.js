/**
 * @author Jigar Khalas 
 * @description Order Item Model 
 */

import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({

    orderId : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Order"
    } , 

    Category_Brand_Cusin_Restaurant_FoodId : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : " Category_Brand_Cusin_Restaurant_FoodId"
    } , 

    price : {
        type : Number , 
        required : true , 
    } , 

    quantity : {
        type : Number , 
        required : true 
    }

})

const orderItemModel = mongoose.model("OrderItem",orderItemSchema); 

export default orderItemModel ; 