/**
 * @author Jigar Khalas
 * @description Brand Model
 */

import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({

    name : {
        type : String , 
        required : true ,
        trim : true , 
        unique : true 
    } , 

    code : {
        type : String, 
        required : true , 
        trim : true , 
        unique : true 
    } , 

    logo : {
        type : String , 
        required : true , 
        trim : true 
    }

})

const BrandModel = mongoose.model("Brand",BrandSchema);

export default BrandModel ; 