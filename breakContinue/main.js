// continue: Continua para a próxima iteração
// break: Saí do laço

const frutas = ['banana', 'maça', 'uva', 'pessego', 'morango'];

for (let fruta of frutas) {

    if (fruta === 'uva') {
        console.log('Pulei a uva');
        continue;
    }

    if (fruta === 'pessego') {
        console.log('Sai quando encontrei o "pessego"');
        break;
    }

    console.log(fruta);
}