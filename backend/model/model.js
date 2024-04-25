

const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    hospitalName:{type:String,require:true},
    address:{type:String,require:true},
    password:{type:String,require:true},
    email:{type:String,require:true},
    city:{type:String,require:true},
    state:{type:String,require:true},
    pincode:{type:String,require:true},
    regnumber:{type:String,require:true},
    ambulanceavail:{type:String,require:true},
    regdate:{type:String,require:true},
    emergward:{type:String,require:true},
    regsertificate:{type:String,require:true},
    mobilenum:{type:String,require:true},
  
},{
    versionKey:false
})
const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
} 