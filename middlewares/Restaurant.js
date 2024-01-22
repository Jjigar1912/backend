/**
 * @author Jigar Khalas 
 */

import { restaurantSchema } from "../Helper/validation.js";

const restaurantSchemaMiddleware = (req,res,next)=>{

    const { error } = restaurantSchema.validate(req.body,{ abortEarly : false });

    if(error){

        const details = error.details.map((Element)=>Element.message);
    
        return res.status(400).json({details});
    
    }

    next();

}

export {
    restaurantSchemaMiddleware , 
}