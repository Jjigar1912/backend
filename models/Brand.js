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
        type : mongoose.Schema.Types.ObjectId, 
        required : true , 
        trim : true , 
        unique : true 
    }

})

const BrandModel = mongoose.model("Brand",BrandSchema);

export default BrandModel ; 