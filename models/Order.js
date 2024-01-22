/**
 * @author Jigar Khalas
 * @description Order Model 
 */

import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "User"
    } ,
    
    order_code : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        unique : true , 
    } , 

    amount : {
        type : Number , 
        required : true 
    } , 

    dateOfOrder : {
        type : Date , 
        default : new Date() ,
        required : true 
    } , 

    total_qty : {
        type : Number , 
        required : true , 
    }

})

const OrderModel = mongoose.model("Order",OrderSchema);

export default OrderModel ; 