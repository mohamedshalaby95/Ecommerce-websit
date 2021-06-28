const express=require('express');
const App=express();
const helmet = require("helmet");
const cors=require('cors')

require('dotenv/config')
require('./config/connectdb')()

App.use(helmet());
App.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))


const port=process.env.PORT ||4000
App.listen(port,()=>{console.log(`listen on port ${port}`)})