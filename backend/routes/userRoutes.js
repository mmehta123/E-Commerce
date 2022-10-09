const express = require('express');
const { updateUser, deleteUser, getUser, getAllUser, getStats } = require("../controllers/userController");
const verify = require('../middlewares/verifyToken');

const router = express.Router();

//update User
router.put('/user/:id', verify, updateUser);
// Delete
router.delete('/user/:id', verify, deleteUser);
//get one user
router.get('/user/:id', verify, getUser);

//get all user
router.get('/users/', verify, getAllUser);

//get status all user
router.get('/stats',verify, getStats);


module.exports = router;