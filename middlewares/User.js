/**
 * @author Jigar Khalas 
 * @description It contains all the middleware of User 
 */

import  { UserSchema , loginSchema } from "../Helper/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken" ;

const userSchemaValidateMiddleware = (req,res,next)=>{

    const {error} = UserSchema.validate(req.body,{ abortEarly : false });
    
    if(error){

        const details = error.details.map((Element)=>Element.message);
        return res.status(400).json({ details }); 
    
    }

    next();

}

const loginMiddleware = (req,res,next)=>{

    const { error } = loginSchema.validate(req.body,{ abortEarly : false }) ;

    if(error){
        
        const details = error.details.map((Element)=>Element.message);

        return res.status(400).json({ details })
    }

    next();
}

const generateHashPassword = async (req,res,next)=>{
    
    try{

        const hashPassword = await bcrypt.hash(req.body.password,10); 
        req.body.password = hashPassword ;
        next()

    }catch(error){

        return res.status(500).json(error);
    
    }

}

const verifyUser = (req,res,next)=>{

    try{

        if(!req.headers.authorization){
            return res.status(401).json({ message : "You are Unauthorized. "});
        }

        const data = jwt.verify(req.headers.authorization,process.env.JWT_KEY);

        Object.assign(req.body,{ user_id : data._id , user_role : data.role_code  }) 

        if(data && ( data.role_code == 'admin_zomato' || data.role_code == 'vendor_zomato' )){
            next()
        }else{
            return res.status(401).json({ message : "You are Unauthorized."});
        }

    }catch(error){
        return res.status(401).json({ message : "Invalid Token"});
    }

}

export { 

    userSchemaValidateMiddleware , 
    generateHashPassword , 
    loginMiddleware , 
    verifyUser

}; 