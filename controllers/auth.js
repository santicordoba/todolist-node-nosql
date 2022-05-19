const {matchedData} = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword')
const {tokenSign, verifyToken} = require('../utils/handleJwt');
const {usersModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');

const registerCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        const dataUser = await usersModel.create(body);
            //quitar el password del retorno
        dataUser.set("password", undefined, {strict:false})
        const data = {
            token: await tokenSign(dataUser),
            user:dataUser,
        }
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}

const loginCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        // nos traemos al user de la bd
        const user = await usersModel.findOne({nickname:req.nickname}).select("password nickname email");
        if(!user){
            handleHttpError(res, "ERROR_USER_NOT_EXIST");
            return
        }
        //ahora necesitamos comparar que el password recibido coincide con el hash de la db
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if(!check){
            handleHttpError(res, "ERROR_LOGIN", 401)
            return
        }
        //quitamos la password de los datos para hacer la respuesta
        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send(data);
    }catch(e){
        console.log(req);
        handleHttpError(res, "ERROR_LOGIN")
    }
}

module.exports = {registerCtrl, loginCtrl};