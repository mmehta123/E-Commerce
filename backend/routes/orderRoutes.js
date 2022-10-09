const express = require('express');
const { addOrder, getOrder, updateOrder, deleteOrder, getAllOrders, getMonthlyIncome } = require("../controllers/orderController");
const verify = require('../middlewares/verifyToken');
const router= express.Router();


router.post("/",verify,addOrder);
router.get("/find/:id",verify,getOrder);
router.put("/:id",verify,updateOrder);
router.delete("/:id",verify,deleteOrder);
router.get("/",verify,getAllOrders);
router.get("/income",verify,getMonthlyIncome);



module.exports=router;