const path = require('path');
const axios = require('axios');
//const { nome, sobrenome, umaFuncao } = require('./mod1');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1'); //puxando tudo do arquivo mod1.js

const p1 = new Pessoa('Igor');
console.log(p1);

console.log(mod1.nome, mod1.sobrenome);
console.log(mod1.umaFuncao());

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
