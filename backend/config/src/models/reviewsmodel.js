const {Schema}=require('mongoose');

const reviewSchema=new Schema({

    name:{type:String ,required:true},
    rating:{typr:Number,required:true},
    commit:{type:String,required:true}
},{timestamps:true})
module.exports =reviewSchema;