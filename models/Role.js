/**
 * @author Jigar Khalas
 * @description Role Model 
 */

import mongoose from "mongoose"

const RoleSchema = new mongoose.Schema({

    role_name : {
        type : String , 
        required : true , 
        trim : true , 
    } , 

    role_code : {
        type : String , 
        required : true , 
        trim : true , 
        unique : true , 
        lowercase : true 
    }

})

const RoleModel = mongoose.model("Role",RoleSchema); 

export default RoleModel ; 