function Calculadora() {
        this.display = document.querySelector('.display'),

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                } else {
                    return;
                }
            });
        };

        this.cliqueBotoes = () => {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-del')) {
                    this.clearOneDisplay();
                }

                   if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el);
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });   
        };

        this.clearOneDisplay = () => this.display.value = this.display.value.slice(0, -1);
        
        this.clearDisplay = () => this.display.value = '';

        this.btnParaDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        };

        this.realizaConta = () => {
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
        };
}

const calculadora = new Calculadora();
calculadora.inicia();