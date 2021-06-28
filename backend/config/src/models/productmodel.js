const {Schema,model}=require('mongoose')
const reviewScheme=require('./reviewsmodel')

const Product = model('Product', new Schema({

    user:{
        type:mongoose.type.Schema.ObjectId,
        required:true,
        ref:'User'

    },
name:{
    type:String,
    required:true
},
  description:{
      type:String,
      required:true
  },
  reviews:[reviewScheme],
  category:{
      type:String,
      required:true
  },
  brand:{
      type:String,
      required:true
  },
  image:{
      type:String,
      required:true
  },
  price:{
      type:Number,
      required:true,
      default:0

  },
  rating:{
    type:Number,
    required:true,
    default:0

},
numReviews:{
    type:Number,
    required:true,
    default:0

},
countInStock:{
    type:Number,
    required:true,
    default:0

},
    





},{timestamps:true}));
module.exports=Product