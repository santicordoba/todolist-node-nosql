const mongoose = require('mongoose');

const CategoryScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        importance: {
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

module.exports = mongoose.model("categorys", CategoryScheme);