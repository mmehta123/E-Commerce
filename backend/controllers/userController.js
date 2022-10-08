const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');


const updateUser = async(req, res) => {
    if(req.user.id===req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password=await bcrypt.hashSync(req.body.password,8);
        }
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            const { password, ...info } = updatedUser._doc;
            return res.status(200).json(info);
        } catch (error) {
            return res.status(400).json({msg:"something went wrong",status:false});
        }
    }else{
        return res.status(400).json({msg:"Not Authorized",status:false});
    }
}



module.exports = { updateUser }