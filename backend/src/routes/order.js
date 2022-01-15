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
router.get('/:id',auth,async(req,res)=>{
  
 const order= await Order.findById(req.params.id).populate('user','name email -_id')

 if(order){

    res.send(order)
 }else{

    res.status(404).send(' this oder not found')
 }
   



})
router.put('/:id/pay',auth,async(req,res)=>{
  
    const order= await Order.findById(req.params.id)
   
    if(order){
       order.isPaid=true
       order.paidAt=Date.now()
       order.paymentResult={
           id:req.body.id,
           status:req.body.status,
           update_time:req.body.update_time,
           email:req.body.payer.email_address

       }
       const updateOrderPay= await order.save()
       res.json(updateOrderPay)
      
    }else{
   
       res.status(404).send(' this oder not found')
    }
      
   
   
   
   })
module.exports=router