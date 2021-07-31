const express=require('express')
const authValidation=require('../validation/authvalidation')
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const auth=require('../../middelware/auth')

const router=express.Router()
router.post('/',async(req,res)=>{
   

const {error}=authValidation(req.body)

if(error){
    res.status(400)
    throw new Error("The email or password not valid ")
}
const user= await User.findOne({email:req.body.email})



if(!user){

    res.status(401)
    throw new Error("The email or password not valid ")
}
else{
    const passwordvalid= await bcrypt.compare(req.body.password,user.password)

    if(!passwordvalid){
        res.status(400)
        throw new Error("The email or password not valid ")
    }
    const token=user.generatetoken()
  
        res.send({
            email:user.email
            ,
            name:user.name,
    
            _id:user._id,
            
            token})
}






})
router.get('/profile',auth, async(req,res)=>{
    
   
    const user =await User.findById(req.user._id).select('-password')
    res.send(user)

})
module.exports=router