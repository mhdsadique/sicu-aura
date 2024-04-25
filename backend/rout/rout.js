

const express=require("express")
const {UserModel}=require("../model/model.js")
var jwt = require('jsonwebtoken');
const userRouter=express.Router()
userRouter.post("/register",async(req,res)=>{
    const datall=req.body
    try{
                        const user =new UserModel(datall)
                        await user.save()
                        res.send({msg:"New Users Has Been registered"})
    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password,hospitalName,}=req.body
    try{
        const user=await UserModel.find({email,password,hospitalName})
        if(user.length>0){
                  var token = jwt.sign({ userID:user[0]._id }, 'totoken');
                    res.send({msg:"Logged in","token":token})
            }
      else{
        res.send({msg:"Wrong Credentials---"})
      }
    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})
module.exports={
    userRouter
}