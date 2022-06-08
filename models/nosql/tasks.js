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
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
        },
        userId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey:false,
    },
);

TaskScheme.statics.findAllData = function (idUser) {
    const joinData = this.aggregate([
        {
            $match: {
                userId: mongoose.Types.ObjectId(idUser)
            }
        },
        {
            $lookup: {
                from: "categorys",
                localField: "categoryId",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $unwind: "$category",
        },
    ]);
    return joinData;
}

TaskScheme.statics.findOneData = function (id) {
    const joinData = this.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "categorys",
                localField: "categoryId",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $unwind: "$category",
        },
        {
            $unwind: "$category",
        },
    ]);
    return joinData;
}

TaskScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("tasks", TaskScheme);