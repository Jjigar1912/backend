/**
 * @author Jigar Khalas 
 * @description Brand and Restaurant Mapping Table
 */

import mongoose from "mongoose";

const Brand_Restaurant_Schema = new mongoose.Schema({
    restaurant_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true ,
        ref : "Restaurant"
    } , 

    brand_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Brand"
    }

})

const Brand_Restaurant_model = mongoose.model("Brand_Restaurant",Brand_Restaurant_Schema);

export default Brand_Restaurant_model ; 