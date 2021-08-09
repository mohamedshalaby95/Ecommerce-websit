const express=require('express')

const Product = require('../models/productmodel')
const router=express.Router()
const auth=require('../../middelware/auth')
const adminAuth=require('../../middelware/adminauth')

const _=require('lodash')

router.post('/', adminAuth ,async(req,res)=>{
    const product= await new  Product(_.pick(req.body,['name','description','category','brand','image','price',' rating','numReviews','countInStock']))
     const result= await product.save()

    res.send(result)
    
    })

router.get('/', async(req,res)=>{
const products= await Product.find()

res.send(products)

})
router.get('/:id' ,async(req,res)=>{
   
    
    const product= await Product.findById(req.params.id)
    if(product){
        res.send(product)
    }
    else{
res.status(404).send('this product not found')
    }
    
   
    
    })




module.exports=router