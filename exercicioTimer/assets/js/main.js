function relogio() {


    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaSegundos(segundos) {
        let data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaSegundos(segundos); //formata em GMT
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            relogio.style.color = 'black';
            iniciarRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
            relogio.style.color = 'red';
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.style.color = 'black';
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });

    /*
    iniciar.addEventListener('click', function (event) {
        relogio.style.color = 'black';
        inciarRelogio();
    });
    
    pausar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.style.color = 'red';
    });
    
    zerar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.style.color = 'black';
        relogio.innerHTML = '00:00:00';
    });
    
    */
}

relogio();