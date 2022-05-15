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
        }
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

module.exports = mongoose.model("tasks", TaskScheme);