import User_restaurant_model from "../models/Restaurant_User.js";
import CusinModel from "../models/Cusins.js";
import cusin_restaurant_model from "../models/Cusin_Restaurant.js";

class CusinController
{
    static async addCusin(req,res)
    {
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });
    
            if(restaurant_id){

               const existingOne = await CusinModel.findOne({ name : { $regex : req.body.name , $options : 'i' } });

               if(existingOne){

                    const existingData = await cusin_restaurant_model.findOne({ restaurant_id , cusin_id : existingOne._id });

                    if(!existingData){

                        const newRecord = new cusin_restaurant_model({ cusin_id : existingOne._id , restaurant_id , image : req.body.image });

                        const data = await newRecord.save();

                        return res.status(201).json({ _id : data._id });

                    }else{

                        return res.status(201).json({ "info" : "You have already added."});

                    }

               }else{

                    const newCusin = new CusinModel({ name : req.body.name , code : Date.now() });

                    const data = await newCusin.save();
               
                    const newCusinRestaurant = new cusin_restaurant_model({ cusin_id : data._id , restaurant_id , image : req.body.image });

                    const insertedData = await newCusinRestaurant.save();
                
                    return res.status(201).json({ _id : insertedData._id });

                }

            }else{

                return res.status(404).json({ "info" : "Your Restaurant is not found." });

            }

        }catch(error){

            return res.status(500).json(error);

        }
    
    }

    static async displayCusin(req,res)
    {
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id }); 

            const data = await cusin_restaurant_model.find({ restaurant_id })
            .populate("cusin_id",{ "name" : 1 , "_id" : 0 })
            .populate("restaurant_id" , { "name" : 1 , "_id" : 0 });
            
            return res.status(200).json(data);

        }catch(error){

            return res.status(500).json(error);

        }
    }

    static async removeCusin(req,res)
    {
        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            const existingData = await cusin_restaurant_model.findOne({ restaurant_id , cusin_id : req.body.cusin_id });

            if(existingData){

                const response = await cusin_restaurant_model.deleteOne({ restaurant_id , cusin_id : req.body.cusin_id  });

                return res.status(200).json(response);

            }else{

                return res.status(404).json({ "info" : "Cusin Not Found . " })
            }

        }catch(error){

            return res.status(500).json(error);

        }
    }

    static async updateCusin(req,res){

        try{

            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id });

            const existed = await cusin_restaurant_model.findOne({ restaurant_id , cusin_id : req.body.cusin_id });
            
            if(existed){

                    const found = await CusinModel.findOne({ name : req.body.name });
    
                    if(!found){

                        const newCusin = new CusinModel({ name : req.body.name , code : Date.now() });

                        const insertedData = await newCusin.save();

                        const newCusinRestaurant = new cusin_restaurant_model({ cusin_id : insertedData._id , restaurant_id , image : req.body.image });

                        await newCusinRestaurant.save();
    
                    }else{
    
                        const data = await cusin_restaurant_model.updateOne({ restaurant_id , cusin_id : req.body.cusin_id } , { cusin_id : found._id , image : req.body.image }); 
    
                        return res.status(200).json(data);
    
                    }
    
            }else{

                return res.status(404).json({ "info" : "You have not added this cusin . "});

            }

        }catch(error){

            return res.status(500).json(error);

        }

    }
    
}

export default CusinController ;