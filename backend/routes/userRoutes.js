const express = require('express');
const { test } = require("../controllers/userController");



const router = express.Router();

//just for testing purposes
router.get('/user/', test);

module.exports=router;