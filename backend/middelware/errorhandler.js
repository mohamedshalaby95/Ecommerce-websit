module.exports=(err,req,res,next)=>{
    console.log("here")
    res.status(500).send(`something is faild ${err}`)
}