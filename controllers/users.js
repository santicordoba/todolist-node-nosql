const {usersModel} = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
    const data = await usersModel.find({});
    res.send({data});
};
const getItem = (req, res) => {
    try{

    } catch(e){
        
    }
};

const createItem = async (req, res) => {
    const {body} = req;
    console.log(body);
    const data = await usersModel.create(body)
    res.send(data);
};
const updateItem = (req, res) => {
    try{

    } catch(e){
        
    }
};
const deleteItem = (req, res) => {
    try{

    } catch(e){
        
    }
};

module.exports = {getItems,getItem,createItem, updateItem, deleteItem};