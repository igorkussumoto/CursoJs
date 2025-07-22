const path = require('path'); //Vai mandar o caminho para a função
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //Caminho absoluto
const escreve = require('./modules/escrever');
const ler = require('./modules.ler');

const pessoas = [
    { nome: 'Igor' },
    { nome: 'Jp' },
    { nome: 'Matheus' },
    { nome: 'Pedro' },
];
const json = JSON.stringify(pessoas, '', 2);

//Passa por parâmetro para a função escrever do arquivo escrever.js
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); //Transforma os dados em JSON
    dados.array.forEach(element => { //Percorre todos os elementos do array
        console.log(element.nome); 
    });
}

leArquivo(caminhoArquivo);