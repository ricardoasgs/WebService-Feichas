var Cliente = require('../models/Cliente');

exports.save = function (nome, telefone, email, cep, rua, bairro, cidade, estado, callback) {
    var novoCliente = new Cliente();
    novoCliente.ativo = true;
    novoCliente.nome = nome;
    novoCliente.telefone = telefone;
    novoCliente.email = email;
    novoCliente.cep = cep;
    novoCliente.rua = rua;
    novoCliente.bairro = bairro;
    novoCliente.cidade = cidade;
    novoCliente.estado = estado;
    novoCliente.save(function (err, cliente) {
        if (err) {
            callback('erro');
        } else {
            callback('OK');
        }
    });
}

