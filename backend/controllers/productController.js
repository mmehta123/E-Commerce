const ProductModel = require('../models/productModel');

// create product
const createProduct = async (req, res) => {
    if (req.user.isAdmin) {
        if (req.body) {
            try {
                const product = await ProductModel.create(req.body);
                return res.status(200).json(product);
            } catch (error) {
                return res.status(400).json({ message: 'something went wronge', status: false });
            }
        } else {
            return res.status(400).json({ message: 'Product not added to DB', status: false });
        }
    }
    return res.status(400).json({ message: 'You are not authenticated', status: false });
}
//update product
const updateProduct = async (req, res) => {
    if (req.user.isAdmin) {
        if (req.body && req.params.id) {
            try {
                const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
                return res.status(200).json(product);
            } catch (error) {
                return res.status(400).json({ message: 'something went wronge', status: false });
            }
        } else {
            return res.status(400).json({ message: 'Product not updated', status: false });
        }
    }
    return res.status(400).json({ message: 'You are not authenticated', status: false });
}

// get single product
const getOneProduct = async (req, res) => {
    if (req.params.id) {
        try {
            const product = await ProductModel.findById(req.params.id);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({ message: 'something went wrong', status: false });
        }
    } else {
        return res.status(500).json({ message:'product not found',status:false}); 
    }
}

//delete product
const deleteProduct=async(req,res)=>{
    if(req.user.isAdmin){
        try {
            const product = await ProductModel.findByIdAndDelete(req.params.id);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({msg:"something went wrong",status:false});
        }
    }
    return res.status(400).json({msg:"you are not authenticated",status:false});
}

//get single product or filtered products
const getProduct = async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    if (req.query.id) {
        try {
            const product = await ProductModel.findById(req.query.id);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({ message: 'something went wronge', status: false });
        }
    } else if(queryNew) {
        try {
            const products = await ProductModel.find().sort({createdAt:-1}).limit(6);
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({ message: 'something went wronge', status: false });
        }
    } else if (queryCategory){
        try {
            const products = await ProductModel.find({
                categories:{
                    $in:[queryCategory]
                }
            });
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({ message: 'something went wronge', status: false });
        }
    }else{
        try {
            const products = await ProductModel.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({ message: 'something went wronge', status: false });
        }
    }
}


module.exports = { createProduct, updateProduct, getProduct, getOneProduct, deleteProduct }