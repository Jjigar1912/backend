import { categorySchema } from "../Helper/validation.js";

const categorySchemaMiddleware = (req,res,next)=>{
   
    const {error} = categorySchema.validate(req.body,{ abortEarly : false }) ; 

    if(error){

        return res.status(400).json({ error }) ;
        
    }

    next(); 

}

export default categorySchemaMiddleware ; 