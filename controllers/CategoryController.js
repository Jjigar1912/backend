/**
 * @author Jigar Khalas 
 * @description Category Controller
 */
import mongoose from "mongoose";
import CategoryModel from "../models/Category.js";
import Category_Restaurant_Model from "../models/Category_Restaurant.js";
import User_restaurant_model from "../models/Restaurant_User.js";
import { categorySchema } from "../Helper/validation.js";

class CategoryController
{
    static async addCategory(req,res)
    {
        let statusCode ;
        var data ; 

        try{        

            Object.assign( req.body  , { code : Date.now() });
            
            const existingCategory = await CategoryModel.find({ name : req.body.name });

            if(existingCategory.length > 0 ){
                
                statusCode = 201 ; 
                data = existingCategory ;
              
            }else{
   
                const newCategory = new CategoryModel(req.body); 
            
                const insertedData = await newCategory.save();

                statusCode = 201 ;

                data = [ insertedData ] ;
            
            }

            const { restaurant_id }  = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            console.log(restaurant_id);

            if(restaurant_id){

                const existing_restaurant_user = await Category_Restaurant_Model.find({ restaurant_id , category_id : data[0]._id }) 
                
                console.log(existing_restaurant_user)

                if(existing_restaurant_user.length == 0){

                    console.log(data[0]._id , "data");

                    console.log(restaurant_id,"res")
       
                    const newRecord = new Category_Restaurant_Model({ restaurant_id , category_id : data[0]._id });
                
                    await newRecord.save();

                }

            }

            return res.status(statusCode).json(data);  

        }catch(error){

            if(error.code === 11000) {
                return res.status(409).json({error})
            }

            return res.status(500).json({ error })
        
        }

    }

    static async displayCategory(req,res){
        
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            if(restaurant_id){

                const data = await Category_Restaurant_Model.find({ restaurant_id }); 

                

                return res.status(200).json(data);
            }

        }catch(error){
            console.error(error);
        }

    }
}

export default CategoryController ; 