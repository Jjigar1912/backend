import { cusinSchema , cusinDeleteSchema, cusinUpdateSchema } from "../Helper/validation.js"

const cusinSchemaMiddleware = (req,res,next)=>{

    const { error } = cusinSchema.validate(req.body, { abortEarly : false });

    if(error){

        return res.status(400).json(error.details);

    }

    next();

}

const cusinSchemaDeleteMiddleware = (req,res,next)=>{

    const { error } = cusinDeleteSchema.validate(req.body, { abortEarly : false }); 

    if(error){

        return res.status(400).json(error.details);

    }

    next();

}

const cusinSchemaUpdateMiddleware = (req,res,next)=>{

    const { error } = cusinUpdateSchema.validate(req.body , { abortEarly : false }) ; 

    if(error){

        return res.status(400).json(error.details);

    }

    next();

}


export {
    cusinSchemaMiddleware,
    cusinSchemaDeleteMiddleware , 
    cusinSchemaUpdateMiddleware
}