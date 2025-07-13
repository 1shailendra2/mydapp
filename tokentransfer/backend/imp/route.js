const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const {sendTokens}= require("./contra.js");
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.post("/send",async (req,res)=>{
    const{to , amount}= req.body;
    try{
        const txHash=await sendTokens(to,amount);
        res.json({sucess:true,txHash});
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error:"Transaction failed"
        }
        );
    }
});
app.listen(3000,()=>{
    console.log("backend running on localhost:3000");
})