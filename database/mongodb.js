import mongoose from "mongoose";
import { MONGODB_URI,NODE_ENV } from "../config/env.js";

if(!MONGODB_URI){
    throw new Error("MONGODB_URI is not defined in environment variables");
}

const connectToDatabase = async () => {
    try {
         await mongoose.connect(MONGODB_URI)
         console.log(`Connected to MongoDB database in ${NODE_ENV} mode`);
    } 
     catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectToDatabase;