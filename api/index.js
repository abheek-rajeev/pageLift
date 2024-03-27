import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err);
});

app.listen(3000,()=>{
    console.log("server running at port 3000");
});

app.use(express.json());

app.use("/api/auth",authRouter);


app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message= err.message || "internal serve error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})

