//Escreva uma função chamada ePaisagem que recebe 2 argumentos, largura e altura de uma imagem (number)
//Retorne a largura e altura e se a imagem estiver no modo paisagem ou retrato.

const largura = Math.random().toFixed(2);
const altura = Math.random().toFixed(2);

function ePaisagem (lar, alt) {
    return lar > alt ? `Largura é ${lar} e altura é ${alt}, portanto modo paisagem` : `Largura é ${lar} e altura é ${alt}, portanto modo retrato`;
}

console.log(ePaisagem(largura, altura));