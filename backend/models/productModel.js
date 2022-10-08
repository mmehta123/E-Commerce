const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },

}, { timestamps: true, versionKey: false });


const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;