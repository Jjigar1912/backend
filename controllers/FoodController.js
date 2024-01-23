/**
 * @author Jigar Khalas
 */

import FoodModel from "../models/Food.js";
import User_restaurant_model from "../models/Restaurant_User.js";

class FoodController
{

    static async addFood(req,res)
    {
        try
        {
            
            const { restaurant_id } = await User_restaurant_model.findOne({ user_id : req.body.user_id }) ; 

            res.send("done");
            
        }catch(error){
            
            console.log(error);

        }
    }

}

export default FoodController ; 