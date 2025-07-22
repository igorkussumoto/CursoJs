const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const titulo = document.querySelector('.titulo');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

titulo.style.fontFamily = 'lato';
titulo.style.fontSize = '50px';
titulo.style.backgroundColor = backgroundColorBody;
titulo.style.padding = '30px';
titulo.style.margin = '50px';
titulo.style.marginTop = '10px';

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.fontFamily = 'lato';
    p.style.padding = '20px';
    p.style.marginBottom = '30px'; 
    p.style.borderRadius = '10px'; 
    p.style.color= 'white';
}