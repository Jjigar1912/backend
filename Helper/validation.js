/**
 * @author Jigar Khalas 
 * @description It contains Validation required for any endpoints . 
 */

import joi from "joi" ; 
import CustomRegex from "./customregex.js";

const UserSchema = joi.object({

    firstName : joi.string().trim().required().custom(CustomRegex.isAlphabet) , 
    lastName : joi.string().trim().required().custom(CustomRegex.isAlphabet) , 
    email : joi.string().trim().email().required() , 
    dateOfBirth : joi.date().required() , 
    username : joi.string().alphanum().trim().required() , 
    password : joi.string().trim().min(7).required() , 
    confirm_password : joi.string().trim().required().valid(joi.ref("password")), 
    role_code : joi.string().required().valid("admin_zomato","vendor_zomato","customer_zomato")

})

const loginSchema = joi.object({
    
    username : joi.string().alphanum().trim().required() , 
    password : joi.string().trim().required() 

}) 

const restaurantSchema = joi.object({

    name : joi.string().trim().min(3).required() , 
    email : joi.string().trim().email().required() , 
    contact : joi.string().min(10).max(10).custom(CustomRegex.isContactNumber).required() , 
    state : joi.string().trim().min(3).custom(CustomRegex.isAlphabet).required(), 
    city : joi.string().trim().min(3).custom(CustomRegex.isAlphabet).required(), 
    country : joi.string().trim().min(3).custom(CustomRegex.isAlphabet).required(), 
    address : joi.string().trim().min(5).required() , 
    latitude: joi.number().min(-90).max(90).required(),
    longitude: joi.number().min(-180).max(180).required(),
    logo : joi.string().trim().required() 

})

const categorySchema = joi.object({

    name : joi.string().trim().min(3).required() , 
    image : joi.string().trim().required()  

})

export {
    UserSchema , 
    loginSchema , 
    restaurantSchema , 
    categorySchema
} ; 