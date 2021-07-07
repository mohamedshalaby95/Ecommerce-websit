const joi=require('joi')
module.exports=(req)=>{
const schema=joi.object({
    email:joi.string().email.required(),
    password:joi.string().required()
})
return schema.validate(req)
}