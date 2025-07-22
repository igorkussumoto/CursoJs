const nome = 'Igor';
const sobrenome = 'Kussumoto';

const umaFuncao = () => {
    console.log(nome, sobrenome);
};

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.umaFuncao = umaFuncao;
this.qualquerCoisa = 'Falo o que eu quiser';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

/*
module.exports = {
    nome, sobrenome, umaFuncao, Pessoa
};
*/