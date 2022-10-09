const OrderModel = require("../models/orderModel");

//
const addOrder = async (req, res) => {
    const newOrder = new OrderModel(req.body);
    try {
        const savedOrder = await newOrder.save();
        return res.status(200).json(savedOrder);
    } catch (err) {
        return res.status(500).json({ msg: "something went wrong", status: false });
    }
}
//
const getOrder = async (req, res) => {
    if (req.user.id === req.params.id) {
        try {
            const orders = await OrderModel.find({ userId: req.params.id });
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    }
    return res.status(400).json({ msg: "you are not authenticated", status: false });
}
//
const updateOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedOrder = await OrderModel.findOneAndUpdate({ userId: req.params.id },
                {
                    $set: req.body,
                },
                { new: true }
            );
            return res.status(200).json(updatedOrder);
        } catch (err) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    }
    return res.status(400).json({ msg: "you are not authenticated", status: false });
}
//
const deleteOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await OrderModel.findOneAndDelete({ userId: req.params.id });
            return res.status(200).json("Order has been deleted...");
        } catch (error) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    }
    return res.status(400).json({ msg: "you are not authenticated", status: false });
}

//
const getAllOrders = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const orders = await OrderModel.find();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    }
    return res.status(400).json({ msg: "you are not authenticated", status: false });
}

//
const getMonthlyIncome = async (req, res) => {
    if (req.user.isAdmin) {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
        try {
            const income = await OrderModel.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$ammount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            return res.status(200).json(income);
        } catch (error) {
            return res.status(400).json({ msg: "something went wrong", status: false });
        }
    }

}

module.exports = { addOrder, getOrder, updateOrder, deleteOrder, getAllOrders, getMonthlyIncome } 