import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Mongodb Connected Succefully!");
    }).catch((err)=>{
        console.log(err);
    });

const port = 3000;
const app = express();

app.listen(port,(err)=>{
    if(err){
        console.log("Something Is Wrong Server Not Running",err);
    }
    console.log("Server Running Succesfully",port);
});