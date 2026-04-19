import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors";
import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

//console.log(process.env.MONGO_URL)

//import notesRoutes from "../routes/notesRoutes.js"
const app=express();
const PORT=process.env.PORT || 5001 


//middleware
app.use(cors({
    origin: "http://localhost:5173",
})
);

app.use(express.json())
app.use(rateLimiter);


app.use("/api/notes",notesRoutes)
//app.use("/api/products",productRoutes)
//app.use("/api/payemnts",paymentRoutes)


// //read
// app.get("/api/notes",(req,res)=>{
//     res.send("you have notes 12345678");
// })
// //create
// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message : "note successfully created"});
// })
// //update
// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message : "note successfully updated"});
// })
// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message : "note successfully deleted"});
// })


connectDB().then (()=>{
app.listen(PORT,()=>{
    console.log("server started on PORT:",PORT);
});
})


// 2gQfvu4fCsKWe3La
// mongodb+srv://dasarisumithra2561_db_user:2gQfvu4fCsKWe3La@cluster0.jvnpnxr.mongodb.net/?appName=Cluster0