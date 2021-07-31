
const joi=require('joi')

module.exports=(user)=>{
const Schema=joi.object({
name:joi.string().required().min(5),
email:joi.string().email().required().min(5),
password:joi.string().required().min(5),
isAdmin:joi.boolean()

})
return  Schema.validate(user)
}