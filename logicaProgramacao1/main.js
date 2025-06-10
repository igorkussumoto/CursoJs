//Escreva uma função que recebe 2 números e retorne o maior deles.

let n1 = Math.random();
let n2 = Math.random();

function maiorNumero (num1, num2){
    if (num1 > num2) {
        console.log(`n1 é o maior número: ${num1.toFixed(2)}`);
        return num1.toFixed(2);
    } else if (num1 < num2){
        console.log(`n2 é o maior número: ${num2.toFixed(2)}`);
        return num2.toFixed(2);
    } else {
        console.log('n1 e n2 são iguais');
        return num1.toFixed(2);
    }
}

console.log(maiorNumero(n1, n2));