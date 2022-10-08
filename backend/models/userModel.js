const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    idAdmin:{
        type:Boolean,
        default: false
    }
}, { timeStamps: true, versionKey: false });


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;