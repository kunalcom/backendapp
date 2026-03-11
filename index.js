import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {DB_NAME} from "./constants.js"
import connectDB from "./src/db/index.js";

connectDB()