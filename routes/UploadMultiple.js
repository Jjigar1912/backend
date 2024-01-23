/**
 * @author Jigar Khalas 
 * @description Here full code of uploading multiple images 
 */

import multer from "multer";
import express from "express";

const router = express.Router();

const upload = multer({

    storage : multer.diskStorage({

        destination : (req,file,cb)=>{

            cb(null,"uploads/")
        
        } , 

        filename : (req,file,cb)=>{

            cb(null,Date.now() + "-" + file.originalname  );

        }
    
    })

}).array("food",5);

router.post("/upload/multiple",upload,(req,res)=>res.status(200).json({ url : req.files }));

export default upload ; 