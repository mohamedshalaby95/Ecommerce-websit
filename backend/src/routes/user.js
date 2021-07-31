const express=require('express')
const User=require('../models/usermodel')
const uservalidation=require('../validation/uservalidation')
const router=express.Router()
const _=require('lodash')
const bcrypt=require('bcrypt')

router.post('/',async(req,res) =>{
  const {error}=uservalidation(req.body)
 

  if(error){
     
      res.status(400)
      throw new Error(`${error.details[0].message}`)
  }
  let user= await  User.findOne({email:req.body.email})
  if(user){
      res.status(401)
      throw new Error("This Email is Registed")
  }
  

  user=new User(_.pick(req.body,['name','email','password','isAdmin']))
  const salt= await bcrypt.genSalt(10)
  user.password= await bcrypt.hash(user.password,salt)
    user= await user.save()

    res.send(_.pick(user,['id','name','email']))

})

module.exports=router