const mongoose = require('mongoose');
require('dotenv/config');

module.exports=()=>{
    
    console.log(process.env.NODE_ENV)

 if(process.env.NODE_ENV==='Production'){

    mongoose.connect(process.env.PROD_DB,{  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
        .then(()=>{ console.log('connect mongodb .....')})
        .catch((error)=>{ console.log(`could not connect with mongodb ${error}`)})
 }
 else{
    mongoose.connect(process.env.DEV_DB,{  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
        .then(()=>{ console.log(`connect mongodb on ${process.env.DEV_DB}`)})
        .catch((error)=>{ console.log(`could not connect with mongodb ${error}`)})
 }




}