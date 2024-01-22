/**
 * @author Jigar Khalas
 * @description User Model 
 */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
    firstName : {
        type : String , 
        trim : true , 
        required : true ,
        min : 3 , 
        validate : {
            validator : (value)=>{
                return /^[a-zA-Z]+$/.test(value);
            } , 
            message : "First name should contain alphabets only."
        } 
    } , 

    lastName : {
        type : String , 
        trim : true , 
        required : true ,
        min : 3 , 
        validate : {
            validator : (value)=>{
                return /^[a-zA-Z]+$/.test(value);
            }, 
            message : "Last Name Should Contain Alphabets Only."
        }
    } , 

    email : {
        type : String , 
        trim : true , 
        lowercase : true ,
        unique : true , 
        required : true 
    } , 

    dateOfBirth : {
        type : Date , 
        required : true 
    } , 

    username : {
        type : String , 
        required : true , 
        trim : true ,
        min : 5 ,  
        unique : true , 
        validate : {
            validator : (value)=>{
                return /^[a-zA-Z0-9@-_]{5,}$/.test(value) ; 
            } , 
            message : "Username must contain atleast 5 characters including A-Za-z0-9@-_"
        }
    } , 

    password : {
        type : String , 
        required : true , 
        trim : true , 
        min : 7 ,
        // validate : {
        //     validator : (value)=>{
        //         return /^(?=.*[ 0-9a-zA-Z~`!@#$%^&*()_-+=/?'\";:[{}]\| ])[0-9a-zA-Z~`!@#$%^&*()_-+=/?'\";:[{}]\|]{7,}$/.test(value);
        //     } , 
        //     message : "Password must contain at least one lowercase , one uppercase ,one digit, one special symbol and length must be atleast 7."
        // }
    } 

} , { timestamps : true }); 

const UserModel = mongoose.model("User",UserSchema) ;

export default UserModel ; 