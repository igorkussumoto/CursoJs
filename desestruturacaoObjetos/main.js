const pessoa = {
    nome: 'Igor',
    sobrenome: 'Kussumoto',
    idade: 20,
    endereco: {
        rua: 'Rua Borba Gato',
        numero: 331
    }
};

// desestruturação de 3 variáveis
const { nome, endereco, endereco: { rua }, numeroTelefone = 'Não tem', ...resto} = pessoa;
console.log(nome, rua, numeroTelefone, resto);