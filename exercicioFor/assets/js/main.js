const carros = [
    { marca: 'Ford', modelo: 'Fiesta', ano: 2020 },
    { marca: 'Chevrolet', modelo: 'Onix', ano: 2021 },
    { marca: 'Volkswagen', modelo: 'Gol', ano: 2019 },
    { marca: 'Fiat', modelo: 'Palio', ano: 2018 },
    { marca: 'Toyota', modelo: 'Corolla', ano: 2022 },
    { marca: 'Honda', modelo: 'Civic', ano: 2021 },
    { marca: 'Hyundai', modelo: 'HB20', ano: 2020 },
    { marca: 'Nissan', modelo: 'Kicks', ano: 2019 },
    { marca: 'Renault', modelo: 'Sandero', ano: 2018 },
    { marca: 'Peugeot', modelo: '208', ano: 2021 },
];

const listaCarros = document.querySelector('.container'); //O primeiro elemento com a classe container

for (let i = 0; i < carros.length; i++) {
    let {marca, modelo, ano} = carros[i];

    let carroDiv = document.createElement('div'); //Criando uma div carro
    carroDiv.classList.add('carro');

    let marcaCarro = document.createElement('p');
    marcaCarro.textContent = `Marca: ${marca}`; //Criando um parágrafo

    let modeloCarro = document.createElement('p');
    modeloCarro.textContent = `Modelo: ${modelo}`; 

    let anoCarro = document.createElement('p');
    anoCarro.textContent = `Ano: ${ano}`; 

    let linha = document.createElement('p');
    linha.textContent = `---------------------------------------`;

    carroDiv.appendChild(marcaCarro);
    carroDiv.appendChild(modeloCarro);
    carroDiv.appendChild(anoCarro);
    carroDiv.appendChild(linha);

    listaCarros.appendChild(carroDiv);
}