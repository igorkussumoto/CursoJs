const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // Pegando as tarefas de localStorage
    const listaDeTarefas = JSON.parse(tarefas); // Texto JSON → Objeto (para poder manipular os dados Javascript)

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();


function criaBotaoExcluir(li){
    li.innerText += ' ';
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';
    li.appendChild(btnExcluir);
    //btnExcluir.classList.add('apagar'); --> Opção 1
    btnExcluir.setAttribute('class', 'apagar');  // --> Opção 2
    btnExcluir.setAttribute('title', 'Apagar essa tarefa');  // --> Opção 2
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){  //13 é o ENTER
        if(!inputTarefa.value) return;
        criaTarefa(textoInput);
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Excluir', '').trim(); //Trim remove os espaços em branco e quebra de linha
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Objeto → Texto JSON (para conseguir armazenar os dados em localStorage, banco de dados, arquivos)
    localStorage.setItem('tarefas', tarefasJSON);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // Coloca o cursor automaticamente no input do formulário
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    const excluir = criaBotaoExcluir(li);
    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); //Remove os "li"
        salvarTarefas();
    }
});