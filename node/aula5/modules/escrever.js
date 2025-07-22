const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); //w: apaga o arquivo todo e escreve ; a: só escreve
};