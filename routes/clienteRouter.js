var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController');


router.post('/cadastrar', function (req, res) {
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var cep = req.body.cep;
    var rua = req.body.rua;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var estado = req.body.estado;
    clienteController.save(nome, telefone, email, cep, rua, bairro, cidade, estado, function (resp) {
        res.json(resp);
    });
});

module.exports = router;