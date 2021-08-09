const mongoose=require('mongoose')
const { Schema, model } = require('mongoose')


const Order = model('Order',
  new Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      orderitems: [
        {
          name: { type: String, required: true },
          qty: { type: String, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
        },
      ],
      shippingAdress: {
        address: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        postCode: { type: String, required: true },
      },
      paymentMethod: {
        type: String,
        required: true,
      },

      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
      taxPrice: {
        type: Number,
        default: 0.0,
        required: true,
      },
      shippingPrice: {
        type: Number,
        default: 0.0,
        required: true,
      },
      totalPrice: {
        type: Number,
        default: 0.0,
        required: true,
      },

      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
    { timestamps: true }
  )
)

module.exports=Order;
