import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// db is another continent

const connectDb = async ()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log( `\n Mongodb Connected !! DB HOST: ${connectionInstance}`)

    }catch(error){
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDb;