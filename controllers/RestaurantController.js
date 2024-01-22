/**
 * @author Jigar Khalas 
 * @description User Controller
 */

import RestaurantModel from "../models/Restaurant.js";
import User_restaurant_model from "../models/Restaurant_User.js";

class RestaurantController
{
    static async addRestaurantController(request,response){

        try{

            const { latitude , longitude , ...remaining } = request.body ;

            const newRecord = new RestaurantModel({ 
                name : request.body.name , 
                email : request.body.email , 
                contact : request.body.contact , 
                state : request.body.state , 
                city : request.body.city , 
                country : request.body.country , 
                address : request.body.address,
                logo : request.body.logo ,  
                location : {
                    type : "Point" , 
                    coordinates : [longitude,latitude]
                }
            });

            const data = await newRecord.save(); 

            console.log(data._id)

            const newInsert = new User_restaurant_model({
                restaurant_id : data._id , 
                user_id : request.body.user_id
            })
            
            await newInsert.save();

            return response.status(201).json(data);
        
        }catch(error){
            if(error.code === 11000)
                return response.status(409).json(error);
            return response.status(500).json(error);

        }
    }

}

export default RestaurantController; 