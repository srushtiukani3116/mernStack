import express from "express";

const port = 8001;
const app = express();

app.listen(port,(err)=>{
    if(err){
        console.log("Something Is Wrong Server Not Running",err);
    }
    console.log("Server Running Succesfully",port);
});
