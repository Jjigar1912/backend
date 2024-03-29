/**
 * @author Jigar Khalas 
 * @description Cusins Model 
 */

import mongoose from "mongoose";

const CusinsSchema = new mongoose.Schema({

    name : {
        type : String , 
        required : true , 
        trim : true , 
        unique : true 
    } , 

    code : {
        type : String , 
        required : true ,
        trim : true 
    } 

})

const CusinModel = new mongoose.model("Cusin",CusinsSchema); 

export default CusinModel ; 