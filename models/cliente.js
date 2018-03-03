var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    ativo: Boolean,
    nome: String,
    telefone: String,
    email: String,
    cep: String,
    rua: String,
    bairro: String,
    cidade: String,
    estado: String,
});


module.exports = mongoose.model('Cliente', ClienteSchema);