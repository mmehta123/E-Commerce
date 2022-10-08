const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, default: 1 }
        }
    ],
    ammount: { type: Number, required: true },
    status: { type: String, default:"pending"},
    address:{type:Object,required:true}

}, { timestamps: true, versionKey: false });


const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;