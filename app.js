var app = require('./config/app_config');
var db = require('./config/db_config');
var cliente = require('./routes/clienteRouter');

app.use('/clientes', cliente);
