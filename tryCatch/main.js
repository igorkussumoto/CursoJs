// try catch serve para não mostrar para o usuário os erros do código (motivos de segurança)

//try {
//   console.log(naoExisto);
//} catch (err) {
//    console.log('nao funciona');
//}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y não são números'); //somente para o desenvolvedor entender qual tipo de erro ocorreu
    }

    return x + y; 
} 

try {
    console.log(soma('1', 2));
} catch (error) {
    //console.log(error); Não lançar um erro assim
    console.log('erro');
}