const {categorysModel} = require('../models');


const getItems = async (req, res) => {
    const data = await categorysModel.find({});
    res.send({data});
}

const createItem = async (req, res) => {
    const {body} = req;
    console.log(body);
    const data = await categorysModel.create(body);
    res.send(data);
}


module.exports = {getItems, createItem};