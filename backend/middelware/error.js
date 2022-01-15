module.exports =(err,req,res,next)=>{
    console.log("here error")

const statusCode=res.statusCode===200?500:res.statusCode

res.status(statusCode)

res.json({
    message:err.message
})

}