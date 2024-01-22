/**
 * @author Jigar Khalas 
 * @description User Controller
 */

import UserModel from "../models/User.js";
import RoleModel from "../models/Role.js";
import UserRoleModel from "../models/User_Role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User_restaurant_model from "../models/Restaurant_User.js";

/**
 * @class UserController
 * @description It contains static method for login and registration. 
 */
class UserController
{
    /**
     * 
     * @param {request} request 
     * @param {response} response
     * @returns response  
     */

    static async loginController(request,response){

        try{
            const { username , password } =  request.body ; 

            const user = await UserModel.findOne({ username });
        
            if(!user) return response.status(401).json({ message : "Username Not Found."});

            const data = await bcrypt.compare(request.body.password,user.password);

            if(data){

                const { password,...remaining } = user._doc ;

                const {role_id } = await UserRoleModel.findOne({ user_id : user._id });

                const { role_code } = await RoleModel.findOne({ _id : role_id }); 
                   
                jwt.sign(Object.assign( remaining , { role_code  }) ,process.env.JWT_KEY,(error,token)=>{

                    if(error) {
                        return response.json(error); 
                    }
                    
                    response.cookie("token",token,{ expire : Date.now() + 86400000 });
                    
                    return response.status(200).json(Object.assign(remaining,{role_code},{token}));
                
                })
            }else{

                return response.status(401).json({ message : "You are not authorized."});
            
            }
        }catch(e){
            return response.status(500).json(e);
        }
    }

    static async registerController (request,response){

        try{
            const { role_code , ...remaining } = request.body ; 
           
            const newUser = new UserModel(remaining); 
    
            const data = await newUser.save();

            const { _id } = await RoleModel.findOne({role_code});

            const newUserRole = new UserRoleModel({ user_id : data._id , role_id : _id });

            await newUserRole.save();

            return response.status(201).json({ _id : data._id })
    
        }catch(e){
            if(e.code === 11000){
                return response.status(409).json({"KeyPattern" : e.keyPattern});
            }
            return response.status(500).json(e)
        }

    }
    
}

export default UserController ; 