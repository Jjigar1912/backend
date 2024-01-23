/**
 * @author Jigar Khalas 
 */

import mongoose from "mongoose";

const cusin_restaurant_schema = new mongoose.Schema({

    cusin_id  : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Cusin"
    } , 

    restaurant_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Restaurant"
    } , 

    image : {

        type : String ,
        required : true  , 
        trim : true

    }

},{ timestamps : true });

const cusin_restaurant_model = mongoose.model("Cusin_Restaurant",cusin_restaurant_schema);

export default cusin_restaurant_model;