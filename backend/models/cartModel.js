const mongoose = require('mongoose');


const CartSchema = mongoose.Schema({
    userId:{type:String, required:true},
    products:[
        {
            productId: { type: String, required: true   },
            quantity:{type:Number,default:1} 
        }
    ]

}, { timeStamps: true, versionKey: false });


const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;