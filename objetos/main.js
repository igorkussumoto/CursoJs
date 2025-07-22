/*
const pessoa = {
    nome: "Lucas",
    idade: 25,
    profissao: "Desenvolvedor"
};

*/

/*
function criaPessoa(nome, idade, profissao) {
   return {
    nome,
    idade,
    profissao
   };
   }
console.log(criaPessoa("Lucas", 25, "Desenvolvedor"));
console.log(criaPessoa("Maria", 30, "Designer"));
console.log(criaPessoa("João", 28, "Analista"));
console.log(criaPessoa("Ana", 22, "Gerente"));
*/

/*
const pessoa = {
    nome: "Igor",
    idade: 20,
    profissao: "Desenvolvedor",

    fala() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`);
    },

    incrementaIdade () {
        ++this.idade;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
*/

/*
function mostrar (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        fala() {
            console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
        }
    };
}

const p1 = mostrar("Lucas", "Silva", 25);
p1.fala();
*/

function banco(valorInicial) {
    var saldo = valorInicial;
    return{
        mostrarSaldo() {
            return saldo;
        },
        depositar(valor) {
            saldo += valor;
        }
    };
}

const conta = banco(0);
conta.depositar(100);
console.log(`O saldo é de R$${conta.mostrarSaldo()}`);
