// for in: lê índices dos vetores e objetos
//
const pessoa = {
    nome: 'Igor',
    idade: 20,
    endereco: {
        rua: 'Rua Borba Gato',
        numero: 331
    }
};

for (let chave in pessoa) {
    console.log(`${chave}:`, pessoa[chave]);
}

console.log('\n');

const frutas = ['banana', 'maça', 'uva', 'pera'];

for (let indice in frutas) {
    console.log(`Índice: ${indice} --> Fruta: ${frutas[indice]}`);
}