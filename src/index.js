import dotenv from "dotenv"
import connectDB from "./db/indexs.js";
dotenv.config({
    path:'./db'
});
connectDB();//dot end is lia us ekia ka jesay hi app run ho environment variable file mein load ho jaye


/*FIRST APPROACH
const app=express();
//this below structure called iffi it will give immidiate response 
//some people apply ; before it bcz if someprev semicolon miss then it create problem
(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_name}`)
      app.on((error)=>{
        console.log("ERROR:",error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App listening at port ${process.env.PORT}`);
      })
    }
    catch(error){
        console.error("Database connection error",error);
        throw error
    }
})()*/