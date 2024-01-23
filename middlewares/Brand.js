/**
 * @author Jigar Khalas
 */

import { addBrandSchema , removeBrandSchema , updateBrandSchema } from "../Helper/validation.js"

const addBrandMiddleware = (req,res,next)=>{

    const { error } = addBrandSchema.validate(req.body,{ abortEarly : false });

    if(error){

        return res.status(400).json(error.details);
    
    }

    next();

}

const removeBrandMiddleware = (req,res,next)=>{

    const { error } = removeBrandSchema.validate(req.body, { abortEarly : false });

    if(error){

        return res.status(400).json(error.details);

    }

    next();

}

const updateBrandMiddleware = (req,res,next)=>{

    const { error } = updateBrandSchema.validate(req.body, { abortEarly : false }) ;

    if(error){

        return res.status(400).json(error.details);

    }

    next();

}

export {
    addBrandMiddleware , 
    removeBrandMiddleware , 
    updateBrandMiddleware
}