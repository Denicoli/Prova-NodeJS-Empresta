const mongoose = require('mongoose');
const schema = require('../models/model');
const Data = mongoose.model('data', schema);

exports.list = async () => {
    const res = await Data.find({}, 'tipo cpf nome matricula -_id');
    return res;
};

exports.create = async data => {
    await new Data(data).save();
};