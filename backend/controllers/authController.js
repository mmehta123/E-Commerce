const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const register = async (req, res) => {
    if (req.body.username && req.body.password && req.body.email) {
        const pass = bcrypt.hashSync(req.body.password, 8);
        try {
            const user = await UserModel.create({ ...req.body, password: pass });
            const { password, ...info } = user._doc;
            return res.status(201).json(info);
        } catch (e) {
            return res.status(500).json({ msg: "something went wrong", status: false });
        }
    } else {
        return res.status(400).json({ msg: "Enter valid input", status: false });
    }
}

const login = async (req, res) => {
    if (req.body.username && req.body.password) {
        try {
            const user = await UserModel.findOne({ username: req.body.username });
            if (!user) {
                return res.status(500).json({ msg: "user does not exists", status: false });
            }
            const pass = await bcrypt.compare(req.body.password, user.password);
            if (pass) {
                const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin},process.env.KEY,{ expiresIn: "3d" });
                const { password, ...info } = user._doc; 
                return res.status(201).json({ ...info, accessToken });
            } else {
                return res.status(500).json({ msg: "credentials mismatch", status: false });
            }
        } catch (e) {
            return res.status(500).json({ msg: "something went wrong", status: false });
        }
    } else {
        return res.status(400).json({ msg: "invalid inputs", status: false });
    }
}

module.exports = { register, login };