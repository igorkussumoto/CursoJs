const date = new Date();
const weekDay = date.getDay();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
const hour = zeroLeft(date.getHours());
const minutes = zeroLeft(date.getMinutes());

function zeroLeft (num) {
    return num >=10 ? num : `0${num}`;
}

function monthText(month) {
    let monthText;

    switch (month) {
        case 0:
            monthText = 'Janeiro';
            break;
        case 1:
            monthText = 'Fevereiro';
            break;
        case 2:
            monthText = 'Março';
            break;
        case 3:
            monthText = 'Abril';
            break;
        case 4:
            monthText = 'Maio';
            break;
        case 5:
            monthText = 'Junho';
            break;
        case 6:
            monthText = 'Julho';
            break;
        case 7:
            monthText = 'Agosto';
            break;
        case 8:
            monthText = 'Setembro';
            break;
        case 9:
            monthText = 'Outubro';
            break;
        case 10:
            monthText = 'Novembro';
            break;
        case 11:
            monthText = 'Dezembro';
            break;
        default:
            monthText = '';
    }
    return monthText;
}


function weekDayText(weekDay) {
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            break;
        case 1:
            weekDayText = 'Segunda-Feira';
            break;
        case 2:
            weekDayText = 'Terça-Feira';
            break;
        case 3:
            weekDayText = 'Quarta-Feira';
            break;
        case 4:
            weekDayText = 'Quinta-Feira';
            break;
        case 5:
            weekDayText = 'Sexta-Feira';
            break;
        case 6:
            weekDayText = 'Sábado';
            break;
        default:
            weekDayText = '';
    }
    return weekDayText;
}

const showWeekDay = weekDayText(weekDay);
const showMonth = monthText(month);

//console.log(showWeekDay);
//console.log(showMonth);

const dataFormatada = (`${showWeekDay}, ${day} de ${showMonth} de ${year} </br> </br>${hour}:${minutes}`);

const elementoParaExibir = document.getElementById('data-hora-atual');
elementoParaExibir.innerHTML = dataFormatada;