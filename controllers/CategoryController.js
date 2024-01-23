/**
 * @author Jigar Khalas 
 * @description Category Controller
 */
import CategoryModel from "../models/Category.js";
import Category_Restaurant_Model from "../models/Category_Restaurant.js";
import User_restaurant_model from "../models/Restaurant_User.js";
import Brand_Restaurant_model from "../models/Brand_Restaurant.js";

class CategoryController
{
    static async addCategory(req, res) {

        let statusCode;

        var data;
    
        try {

          Object.assign(req.body, { code: Date.now() });
    
          const existingCategory = await CategoryModel.find({ name: req.body.name });
    
          if (existingCategory.length > 0) {

            statusCode = 201;
            
            data = existingCategory;
          
         } else {

            const { image, ...remaining } = req.body;
            
            const newCategory = new CategoryModel(remaining);
    
            const insertedData = await newCategory.save();
    
            statusCode = 201;
    
            data = [insertedData];
          
        }
    
        const { restaurant_id } = await User_restaurant_model.findOne({ user_id: req.body.user_id });
    
        console.log(restaurant_id);
    
        if (restaurant_id) {
            
            const existing_restaurant_user = await Category_Restaurant_Model.find({ restaurant_id , category_id: data[0]._id });
    
            console.log(existing_restaurant_user);
    
            if (existing_restaurant_user.length == 0) {

              const newRecord = new Category_Restaurant_Model({ restaurant_id , category_id: data[0]._id, image: req.body.image });
    
              await newRecord.save();
            
            }
          
        }
    
          return res.status(statusCode).json(data);
        
        } catch (error) {
        
            if (error.code === 11000) {
        
                return res.status(409).json({ error });
          
            }
    
          return res.status(500).json({ error });
        
        }
      
    }

    static async displayCategory(req,res){
        
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });
            
            if(restaurant_id){

                const data = await Category_Restaurant_Model.find({ restaurant_id }).populate("category_id",{ "name" : 1 , "code" : 1 , "_id" : 0 }); 

                return res.status(200).json(data);
            
            }

        }catch(error){

            console.error(error);
        
        }

    }

    static async deleteCategory(req, res) {

        try {
        
            const { restaurant_id } = await User_restaurant_model.findOne({ user_id: req.body.user_id });
    
            const existing = await Category_Restaurant_Model.findOne({ restaurant_id , category_id: req.body.category_id });
    
            if (existing) {

                const data = await Category_Restaurant_Model.deleteOne({ restaurant_id, category_id: req.body.category_id });
            
                return res.status(200).json(data);

            } else {

                return res.status(404).json({ info: "Category Not Found." });
          
            }

        } catch (error) {

          return res.status(500).json(error);
        
        }
    }

    static async updateCategory(req, res) {

        try {

          const data = await CategoryModel.findOne({ name: { $regex : req.body.name , $options : 'i' } });
    
          const { restaurant_id } = await User_restaurant_model.findOne({ user_id: req.body.user_id });

          const { category_id } = req.body ; 

          const category_user = await Brand_Restaurant_model.findOne({ restaurant_id , category_id });

          if(category_user){
        
            if(data){

                const response = await Category_Restaurant_Model.updateOne({ category_id : req.body.category_id , restaurant_id } , { category_id : data._id , image : req.body.image });
            
                return res.status(200).json(response);

            }else{

                const newRecord = new CategoryModel({ name : req.body.name , code : Date.now() });

                const data = await newRecord.save();

                const response = await Category_Restaurant_Model.updateOne({ category_id : req.body.category_id , restaurant_id } , { category_id : data._id , image : req.body.image });
            
                return res.status(200).json(response);

            }

          }else{

            return res.status(404).json({ "info" : "You have not added this category."});

          }

        } catch (error) {

          return res.status(500).json(error);
        
        }
    }
}

export default CategoryController ; 