const CartModel = require('../models/cartModel');


// create cart
const createCart = async (req, res) => {
    req.body={...req.body,userId:req.params.id}
        try {
            const cart= await CartModel.findOne({userId:req.params.id});
            if(!cart){
                const cart = await CartModel.create(req.body);
                return res.status(200).json(cart);
            }
            return res.status(500).json({msg:"cart already exists",status:false});
        } catch (error) {
            return res.status(400).json({ message: 'something went wrong', status: false });
        }
}
// //update cart
const updateCart = async (req, res) => {
    if (req.user.id=req.params.id) {
        if (req.body && req.params.id) {
            try {
                const cart = await CartModel.findOneAndUpdate({userId:req.params.id},req.body,{new:true});
                // console.log(cart)
                return res.status(200).json(cart);
            } catch (error) {
                return res.status(400).json({ message: 'something went wrong', status: false });
            }
        } else {
            return res.status(400).json({ message: 'cart not updated', status: false });
        }
    }
    return res.status(400).json({ message: 'You are not authenticated', status: false });
}

const deleteCart= async (req, res) => {
    if(req.user.id=req.params.id){
        try {
            await CartModel.findOneAndDelete({userId:req.params.id});
            return res.status(200).json("Products has been removed from your cart");
        } catch (err) {
            return res.status(500).json({msg:err,status:false});
        }
    }
    return res.status(500).json({msg:"you are not authenticated",status:false});
}

// // get user cart
const getCart = async (req, res) => {
    if (req.params.id=req.user.id || req.user.isAdmin) {
        try {
            const cart = await CartModel.findOne({userId:req.params.id});
            return res.status(200).json(cart);
        } catch (error) {
            return res.status(400).json({ message: 'something went wrong', status: false });
        }
    } else {
        return res.status(500).json({ message:'you are not authenticated',status:false}); 
    }
}

// //get all cart 
const getCarts= async (req, res) => {
    if(req.user.isAdmin){
            try{
                const carts= await CartModel.find();
                return res.status(200).json(carts);
            }catch(e){

            }
    }return res.status(400).json({ msg:'you are not authenticated',status:false});
}



module.exports = { createCart, updateCart, deleteCart, getCart, getCarts }