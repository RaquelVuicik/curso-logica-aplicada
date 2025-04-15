// DESAFIO 01: Controle de Navegação em Navegadores Web

let pilhaVoltar = [];
let pilhaAvancar = [];
let paginaAtual = "";

function voltar() {
  pilhaAvancar.push(paginaAtual);
  paginaAtual = pilhaVoltar.pop();

  debug("voltar");
}

function avancar() {
  pilhaVoltar.push(paginaAtual);
  paginaAtual = pilhaAvancar.pop();

  debug("avancar");
}

function navegar(endereco) {
  if (paginaAtual != "") {
    pilhaVoltar.push(paginaAtual);
  }

  paginaAtual = endereco;
  pilhaAvancar = [];

  debug("navegar");
}

function debug(acao) {
  console.log({
    acao,
    atual: paginaAtual,
    historico_voltar: pilhaVoltar.join(", "),
    historico_avancar: pilhaAvancar.join(", "),
  });
}

navegar("www.google.com");
navegar("app.seufisio.com.br");
navegar("app.seumedic.com.br");
voltar();
navegar("www.facebook.com");
voltar();
voltar();
avancar();
avancar();
voltar();
navegar("x.com");
