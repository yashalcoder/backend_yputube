import mongoose from "mongoose";
import { DB_name } from "../constants.js";
import express from "express";

const app=express();
const connectDB=async ()=>{
    try {
        const connetionInstance= await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_name}`);
        console.log(`\n Mongodb connected DB HOST: ${
            connetionInstance.connection.host}`)//ya db ka pura url da deta hai ya is lia host ko show kraya hai ka agr mein glti
            //  sa kisi aur host pr connct ho jao q ka production,development and testing ka alag hota hai
    } catch (error) {
        console.log("Error:",error);
        process.exit(1);
    }
}
export default connectDB;