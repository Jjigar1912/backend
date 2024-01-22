/**
 * @author Jigar Khalas
 * @description Zomato API 
 */

import express from "express";
import dotenv from "dotenv"; 
import connectDB from "./config/DB.js";
import "./models/modelImport.js";
import combineRoutes from "./routes/mainRoute.js";


dotenv.config();

connectDB();

const app = express();

app.use(express.json())

app.use("/",combineRoutes);

const PORT = process.env.PORT || 3000 ; 

app.listen(PORT,()=>{ console.log("Server Started."); });