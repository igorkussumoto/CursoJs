const express = require('express');
const app = express();
const routes = require('./routes');

//https://meusite.com < - GET - > Entregue a página /

app.use(express.urlencoded({extended: true})); //Quando alguém postar, algo vc trata o body e me da o objeto do que foi tratado.
app.use(routes);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome : <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios/:parametro', (req, res) => {
    console.log(req.params); // /profiles/3
    console.log(req.query); // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que vocë enviou foi: ${req.body.nome}`);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});