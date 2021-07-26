const { Schema, model } = require('mongoose')
const jwt=require('jsonwebtoken')

const userSchema=new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)
userSchema.methods.generatetoken= function(){
  console.log(process.env.SECERT_TOKEN)
 const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},process.env.SECERT_TOKEN)
 return token
}

const User = model('User',userSchema
  
)
module.exports = User
