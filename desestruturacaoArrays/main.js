// ...rest, ...spread

const numeros = [100, 222, 344, 488, 599, 657, 766, 823, 975];
const [...todosNumeros] = numeros;  // ou const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(...todosNumeros);

//                     0         1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const cinco = numeros2[1][1];
console.log(cinco);

const [lista1, lista2, lista3] = numeros2;
console.log(lista1[2]);