const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const UsersScheme = new mongoose.Schema(
    {
        nickname: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

UsersScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("users", UsersScheme);