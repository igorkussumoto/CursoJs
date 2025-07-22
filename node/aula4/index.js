// Listando arquivos

const fs = require('fs').promises; //leia todos os arquivos e ai sim me mostre
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); //garante que o node encontre o caminho
    const files = await fs.readdir(rootDir); //Lê todos arquivos do rootDir e espera terminar antes de executar
    walk(files, rootDir); 
}

async function walk(files, rootDir) {
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath); //Retorna informações detalhadas sobre um arquivo ou diretório

        if(/\.git/g.test(fileFullPath)) continue; //Se tiver git, ignore e continue

        if(/node_modules/g.test(fileFullPath)) continue; //Se tiver node_modules, ignore e continue

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(!/\.html$/g.test(fileFullPath)) continue; //Mostre somente os arquivos html

        console.log(fileFullPath, stats.isDirectory());
    }
}

readdir('/Usuario/Documents/CursoJs/');