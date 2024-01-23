/**
 * @author Jigar Khalas
 */

import { restaurantSchema } from "../Helper/validation.js"

const foodSchemaMiddleware = (req,res,next)=>{

    const { error } = restaurantSchema.validate(req.body,{ abortEarly : false }); 

    if(error){

        return res.status(400).json(error.details);
    
    }

    next();

}

export { foodSchemaMiddleware } ; 