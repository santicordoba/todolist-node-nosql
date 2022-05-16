const mongoose = require('mongoose');

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

module.exports = mongoose.model("tasks", TaskScheme);