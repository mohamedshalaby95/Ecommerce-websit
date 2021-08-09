const express=require('express')


const Order = require('../models/ordermodel')
const router=express.Router()
const auth=require('../../middelware/auth')

router.post('/', auth,async(req,res)=>{

    const { 
        
    orderitems,
    shippingAdress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice
    
    
    }=req.body
    if(orderitems && orderitems.length===0){
        res.status(400)
        throw new Error('No items exist')
    }
    else{
        const userorder=  await  new Order ({
            orderitems,
            shippingAdress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice,
            user:req.user._id

        })
      

        const createOrder=  await userorder.save()
       
        res.status(201).send(createOrder)

    }

})
module.exports=router