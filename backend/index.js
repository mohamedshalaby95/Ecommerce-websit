require('express-async-errors');
const express=require('express');
const App=express();
const helmet = require("helmet");
const cors=require('cors')
const routerProduct =require('./src/routes/product')
const routerUser=require('./src/routes/user')
const routerAuthUser=require('./src/routes/auth')
const errMidleware=require('./middelware/error')


require('dotenv/config')
require('./config/connectdb')()
App.use(express.json())

App.use(helmet());
App.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
App.use('/api/product',routerProduct)
App.use('/api/user',routerUser)
App.use('/api/login',routerAuthUser)
App.use(errMidleware)


const port=process.env.PORT ||4000
App.listen(port,()=>{console.log(`listen on port ${port}`)})