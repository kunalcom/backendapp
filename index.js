import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {DB_NAME} from "./constants.js"
import connectDB from "./src/db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`app running on port${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed",err)
})