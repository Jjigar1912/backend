/**
 * @author Jigar Khalas 
 * @description User and Role Mapping Model 
 */

import mongoose from "mongoose";

const UserRoleSchema = new mongoose.Schema({
    
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true ,
        ref : "User"
    }, 

    role_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true , 
        ref : "Role"
    }

})

const UserRoleModel = mongoose.model("UserRole",UserRoleSchema); 

export default UserRoleModel ; 