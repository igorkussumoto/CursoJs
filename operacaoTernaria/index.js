const pontuacaoUsuario = 999;
const nivelusuario = pontuacaoUsuario >= 1000 ? 'Usário VIP' : 'Usuário Básico';

corUsuario = null;
corPadrao = corUsuario || 'Preto';
console.log(nivelusuario, corPadrao);