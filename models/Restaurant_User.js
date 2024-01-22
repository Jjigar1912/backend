/**
 * @author Jigar Khalas 
 * @description Order Item Model 
 */



import mongoose from "mongoose";

const User_Restaurant_Schema = new mongoose.Schema({

    restaurant_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Restaurant" , 
        required : true 
    }  , 

    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User" , 
        required : true 
    }

});

const User_restaurant_model = mongoose.model("User_Restaurant",User_Restaurant_Schema);

export default User_restaurant_model ; 