var mongoose = require('mongoose');

var urlString = 'mongodb://admin:admin@ds133557.mlab.com:33557/reserva' ;

mongoose.connection.openUri(urlString, (err, res) => {
    if(err) {
    	console.log('Não foi possivel conectar com o Banco: ');
        console.log(err);
    } else {
        //console.log(res);
        console.log('Conectado com o Banco');
    }
});