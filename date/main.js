//const date = new Date("July 20, 69 20:17:40 GMT+00:00");
//console.log(date.toString()); //dia da semana / dia / ano / horário / GMT-0300 
//console.log(date.getDate()); // dia
//const data = new Date('2004-08-26 13:00:00');
//console.log(data.toString());
//console.log('Mês', data.getMonth() + 1);
//console.log(data.getFullYear());
//console.log('Dia da semana', data.getDay()); // 0 - domingo , 6 - sábado
//console.log(data.getHours());
 
//const aniversario = new Date(2004, 7, 26);
//const copia = new Date();
//copia.setTime(aniversario.getTime()); //copia a data em uma variável

//console.log(copia);

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const diaSemana = zeroAEsquerda(data.getDay());

    return `${dia}/${mes}/${ano} :: dia da semana: ${diaSemana}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);