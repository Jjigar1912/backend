/**
 * @author Jigar Khalas 
 * @description It contains all function for adding , removing , updating , displaying brand 
 */

import BrandModel from "../models/Brand.js";
import User_restaurant_model from "../models/Restaurant_User.js";
import Brand_Restaurant_model from "../models/Brand_Restaurant.js";


class BrandController
{

    static async addBrand(req, res){

        try{

            const existingOne = await BrandModel.findOne({ name : { $regex : req.body.name , $options : 'i' }});

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            if(existingOne){

                const existingData = await Brand_Restaurant_model.findOne({ restaurant_id , "brand_id" : existingOne._id });

                if(!existingData){

                    const newBrandRestaurant = new Brand_Restaurant_model({ restaurant_id , brand_id : existingOne._id });

                    const data = await newBrandRestaurant.save();    

                    return res.status(201).json({ _id : data._id });

                }else{

                    return res.status(201).json({ _id : existingData._id });

                }

            }else{

                const newBrand = new BrandModel({ name : req.body.name , code : Date.now() , logo : req.body.logo }) ; 

                const newRecord = await newBrand.save();
    
                const newBrandRestaurant = new Brand_Restaurant_model({ restaurant_id , brand_id : newRecord._id });
    
                const data = await newBrandRestaurant.save();
    
                return res.status(201).json({ _id : data._id }); 

            }
        
        }
        catch(error){

            if(error.code===11000){

                return res.status(409).json(error);

            }

            return res.status(500).json(error);

        }
    }

    static async displayBrand(req,res){

        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            if(restaurant_id){

                const data = await Brand_Restaurant_model.find({ restaurant_id }).populate("restaurant_id",{ name : 1 , _id : 0 }).populate("brand_id");

                return res.status(200).json(data);

            }else{

                return res.status(404).json({ "info" : "Restaurant Not Found"});

            }

        }catch(error){

            return res.status(500).json(error);

        }

    }

    static async removeBrand(req,res){
        
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id }); 

            if(restaurant_id){

                const existingOne = await Brand_Restaurant_model.findOne({ restaurant_id , brand_id : req.body.brand_id });

                if(existingOne){

                    await Brand_Restaurant_model.deleteOne({ _id : existingOne._id });

                    return res.status(200).json({ "info" : "Brand deleted."});
                   
                }else{

                    return res.status(404).json({ "info" : "Brand Not Found." });

                }

            }else{

                return res.status(404).json({ "info" : "Your restaurant is not  found."})
            }

        }catch(error){

            return res.status(500).json(error);
        }

    }

    static async updateBrand(req,res){

        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            const { brand_id } = req.body ; 

            const data = await Brand_Restaurant_model.findOne({ restaurant_id , brand_id });

            if(data){
                
                if(restaurant_id){

                    const data = await BrandModel.findOne({ name : { $regex : req.body.name , $options : 'i' }});
    
                    if(data){
    
                        const updatedData = await Brand_Restaurant_model.updateOne({ brand_id : req.body.brand_id , restaurant_id } , { brand_id : data._id });
    
                        return res.status(200).json(updatedData);
    
                    }else{

                        const newRecord = new BrandModel({ name : req.body.name  , code : Date.now() , logo : req.body.logo });
    
                        const newData = await newRecord.save();
                        
                        const updatedData = await Brand_Restaurant_model.updateOne({ brand_id , restaurant_id },{ brand_id : newData._id });
    
                        return res.status(200).json(updatedData);
                        
                    }
    
                }else{
    
                    return res.status(404).json({ "info" : "Restaurant Not Found."})
                }
            }else{

                return res.status(404).json({ "info" : "You have not added category."});
                
            }
        
        }
        catch(error){

            return res.status(500).json(error);

        }
    }

}

export default BrandController ; 