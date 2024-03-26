import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database")
})

app.listen(3000,()=>{
    console.log("server running at port 3000");
});

