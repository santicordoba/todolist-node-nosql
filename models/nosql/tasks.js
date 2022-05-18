const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TaskScheme = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        fecha: {
            type: String,
        },
        status: {
            type:["pending","finished"],
            default: "pending"
        }
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

TaskScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("tasks", TaskScheme);