const mongoose = require('mongoose');

const TaskScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

module.exports = mongoose.model("tasks", TaskScheme);