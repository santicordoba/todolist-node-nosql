const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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

CategoryScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("categorys", CategoryScheme);