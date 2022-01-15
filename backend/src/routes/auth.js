const express=require('express')
const authValidation=require('../validation/authvalidation')
const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const auth=require('../../middelware/auth')
const admin=require('../../middelware/adminauth')

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
            isAdmin:user.isAdmin,

            
            token})
}






})
router.get('/profile',auth,async(req,res)=>{
    
   
    const user =await User.findById(req.user._id).select('-password')
    res.send(user)

})

router.get('/admin/users',auth,admin,async(req,res)=>{
    

const users=await User.find({})
const  userApp= users.filter((user) =>  user.isAdmin===false)

if( userApp){
   


    res.json(userApp)
}
else{

    res.status('404').send("message:not found users")
    
}

})
router.get('/admin/admins',auth,admin,async(req,res)=>{
    
    const users=await User.find({})
    const  adminApp= users.filter((user) =>  user.isAdmin===true)
    
    if( adminApp){
       
    
    
        res.json(adminApp)
    }
    else{
    
        res.status('404').send("message:not found users")
        
    }
    
    })
    router.delete('/admin/delete/:id',auth,admin,async(req,res)=>{
        
        const deleteuser=  await User.findOneAndDelete({_id: req.params.id} )
       
      
        
     
        
        if( deleteuser){
           
            console.log(deleteuser)
        
        res.json(deleteuser)
        
            
        }
        else{
        
            res.status('404').send("message:not found users")
            
        }
        
        })
//     router.delete('/admin/delete/:id',auth,admin,async(req,res)=>{
// console.log(req.params.id)

//     })
    
module.exports=router