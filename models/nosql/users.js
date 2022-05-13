const mongoose = require('mongoose');

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

module.exports = mongoose.model("users", UsersScheme);