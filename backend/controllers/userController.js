const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');


const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = await bcrypt.hashSync(req.body.password, 8);
        }
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,
                req.body
                , { new: true });
            const { password, ...info } = updatedUser._doc;
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    } else {
        return res.status(400).json({ msg: "Not Authorized", status: false });
    }
}

const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            const { password, ...info } = user._doc;
            return res.status(200).json(info)
        } catch (err) {
            return res.status(403).json({ msg: 'something went wrong', status: false });
        }
    } else {
        return res.status(403).json({ msg: 'You are not allowed to delete', status: false });
    }
}
const getUser = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const user = await UserModel.findById(req.params.id);
            const { password, ...info } = user._doc;
            return res.status(200).json(info)
        } catch (err) {
            return res.status(403).json({ msg: 'something went wrong', status: false });
        }
    } else {
        return res.status(403).json({ msg: 'You are not allowed', status: false });
    }
}
const getAllUser = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            let users;
            if (req.query.new) {
                users = await UserModel.find().sort({ _id: -1 }).limit(1);
            } else {
                users = await UserModel.find();
            }
            return res.status(200).json(users);
        } catch (err) {
            return res.status(403).json({ msg: 'something went wrong', status: false });
        }
    } else {
        return res.status(403).json({ msg: 'You are not allowed', status: false });
    }
}

const getStats = async (req, res) => {
    if (req.user.isAdmin) {

        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
        const stats = await UserModel.aggregate([
            {
                $match: { createdAt: { $gte: lastYear } }
            }, {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        return res.status(200).json(stats);
    } else {
        return res.status(400).json({ msg: "you are not allowed", status: false });

    }
}



module.exports = { updateUser, deleteUser, getUser, getAllUser, getStats }