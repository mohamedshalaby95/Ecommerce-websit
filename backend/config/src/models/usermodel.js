const {Schema,model}=require('mongoose')

const User= model(new Schema({

name:{type:String,required:true},
email:{type:String,required:true,unique: true},
password:{
    type:String,required:true
},
isAdmin:{
    type:Boolean,
    required:true,
    default:false
}

},{timestamps:true}))
module.exports=User