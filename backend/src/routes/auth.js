const express=require('express')
const authValidation=require('../validation/authvalidation')
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')

const router=express.Router()
router.post('/',async(req,res)=>{

const {error}=authValidation(req.body)

if(error){
    res.status(400).send('The email or password not valid ')
}
const user= await findone({email:req.body.email})

if(!user){
    res.status(400).send('The email or password not valid ')
}
const passwordvalid= await bcrypt.compare(req.body.email,user.password)
if(!passwordvalid){
    res.status(400).send('The email or password not valid ')
}

res.send("token")

})
module.exports=router