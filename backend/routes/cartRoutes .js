const express = require('express');
const { createCart, updateCart, deleteCart, getCart, getCarts } = require("../controllers/cartController");
const verify=require("../middlewares/verifyToken");
const router=express.Router();

// create cart
router.post("/:id",verify,createCart);
// update cart
router.put("/:id", verify, updateCart);
// delete cart
router.delete("/:id", verify, deleteCart);
// get user cart
router.get("/:id", verify, getCart);
// get all users cart
router.get("/", verify, getCarts);



module.exports=router;