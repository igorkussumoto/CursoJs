function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                } else {
                    return;
                }
            });
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.clearOneDisplay();
                }
            });   
        },

        realizaConta () {
            let conta = this.display.value;

            try {
                conta = eval(conta); //realiza as contas do display, pode ser perigoso se n evitar o sql injection
                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = conta;

            } catch(e) {
                alert('Conta Inválida!');
                return;
            }
        },

        clearOneDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();