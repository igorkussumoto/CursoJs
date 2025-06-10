const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        setResultado('Peso e altura são <strong>obrigatórios!</strong>', false);
        return;
    }

    const imc = calcularIMC(peso, altura);
    const nivel = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (<strong>${nivel}</strong>)`;

    setResultado(msg, true);
});


function criaP() {
    const p = document.createElement('p');
    return p;
}

function calcularIMC(peso, altura) {
    const calculoIMC = peso / (altura * altura);
    return `${calculoIMC.toFixed(2)}`;
}

function getNivelIMC(imc) {

    let nivelIMC = '';

    if (imc < 18.5) {
        return 'Você está abaixo do peso';
    } else if (imc < 24.9) {
        return 'Você está com o peso normal';
    } else if (imc < 29.9) {
        return 'Você está acima do peso';
    } else {
        return 'Você está obeso';
    }
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

     if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  
  resultado.appendChild(p);
    p.innerHTML = msg;
    resultado.appendChild(p);
}