function mostrarHora () {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const startTimer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

const stopTimer = setTimeout(function () {
    clearInterval(startTimer);
    console.log('Os 5 segundos já foram');
}, 5000); 