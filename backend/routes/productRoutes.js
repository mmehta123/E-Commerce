const express = require('express');
const { createProduct, updateProduct, getProduct, getOneProduct, deleteProduct } = require("../controllers/productController");
const verify = require('../middlewares/verifyToken');
const router=express.Router();

router.post("/create",verify,createProduct);
router.put("/updateproduct/:id", verify, updateProduct);
router.get("/getproduct/:id", getOneProduct);
router.get("/products", getProduct);
router.delete("/deleteproduct/:id",verify, deleteProduct);


module.exports=router;