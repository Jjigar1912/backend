/**
 * @author Jigar Khalas
 * @description Database Connection File 
 */

import mongoose from "mongoose";

const connectDB = async ()=>{
    try{

        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database Connected.")
    
    }catch(e){
    
        console.log("Database Connected.")
    
    }
}

export default connectDB ; 
