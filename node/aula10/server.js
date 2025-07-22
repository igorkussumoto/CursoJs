const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true})); //Quando alguém postar, algo vc trata o body e me da o objeto do que foi tratado.

app.set('views', path.resolve(__dirname, 'src', 'views')); //avisa o express a pasta de views e qual engine vai rendereizar a mesma.
app.set('view engine', 'ejs'); //engine voltada para o html

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});