const jwt = require("jsonwebtoken")


module.exports=(req,res,next)=>{


    let token
    console.log(req.headers.authorization)
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
             
        token=req.headers.authorization.split(" ")[1]
        try{
            decode=jwt.verify(token,process.env.SECERT_TOKEN)
            console.log(decode)
            if(decode.isAdmin){
                next()
            }
            else{
                res.status(403).send('IT  allow to admin')
            }
        }
        catch(err){
            res.status(403).send("Not autherized or No token")
        }

       

    }
    if(!token){
        res.status(401).send('Not autherized ')
    }
}