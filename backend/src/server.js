const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://mcosta:27622460@dbaircnc-shard-00-00-zbwbj.mongodb.net:27017,dbaircnc-shard-00-01-zbwbj.mongodb.net:27017,dbaircnc-shard-00-02-zbwbj.mongodb.net:27017/admin?ssl=true&replicaSet=dbaircnc-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);