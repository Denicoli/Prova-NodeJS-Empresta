const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    }
});

module.exports = schema;