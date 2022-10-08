const express = require('express');
const { updateUser } = require("../controllers/userController");
const verify = require('../middlewares/verifyToken');

const router = express.Router();

//update User
router.put('/user/:id', verify, updateUser);


module.exports=router;