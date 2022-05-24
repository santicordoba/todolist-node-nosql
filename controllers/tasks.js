const {tasksModel} = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
    try{
        const data = await tasksModel.findAllData({});
        res.send({data});
    } catch(e){
        handleHttpError(res, "ERROR_GET_ALL_ITEMS")
    }
};

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tasksModel.findOneData(id);
        res.send({data});
    } catch(e){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        console.log(req)
        const data = await tasksModel.create(req);
        res.send({data});   
    } catch(e){
        handleHttpError(res, "ERROR_ADD_ITEM")
    }
};
const updateItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id, ...body} = req;
        const data = await tasksModel.findByIdAndUpdate(id, body, {new:true});
        res.send({data})
    } catch(e){
        handleHttpError(res, "ERROR_UPDATE_ITEM")
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tasksModel.delete({_id:id});
        res.send({data})
    } catch(e){
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};