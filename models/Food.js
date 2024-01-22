/**
 * @author Jigar Khalas 
 * @description Food Model 
 */

import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({

    name : {
        type : String , 
        required : true , 
        trim : true 
    } ,

    price : {
       type : Number, 
       required : true , 
       min : 0 
    } ,

    description : {
        type : String , 
        required : true , 
        trim : true
    } ,

    foodImage : {
        type : String , 
        required : true 
    } ,

    rating : {
        type : Number , 
        required : true ,  
        max : 5 , 
        min : 0 
    } , 

    discount : {
        type : Number , 
        required : true , 
        default : 0 
    }
    
})

const FoodModel = mongoose.model("Food",FoodSchema) ; 

export default FoodModel ; 