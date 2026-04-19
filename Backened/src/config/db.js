import mongoose from "mongoose"
export const connectDB=async ()=>{
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log("mongoDB connected successfully")
    }
    catch(error){
 console.log("error connecting to mongoDB",error)
 process.exit(1)  //exit with failure 0 meams success
    }
}