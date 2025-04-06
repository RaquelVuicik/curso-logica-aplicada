// Calcule em quanto tempo a carteira de motorista irá vencer de acordo com a legislação.

let idade = 55; // a idade do motorista
let primeiraHabilitacao = false; // se é a primeira habilitação do motorista
let vencimento;

if (primeiraHabilitacao) {
    vencimento = "1 ano";
} else if (idade < 50) {
    vencimento = "10 anos";
} else if (idade < 70) {
    vencimento = "5 anos";
} else {
    vencimento = "3 anos";
}

console. log("0 prazo de renovação da sua CNH é de " + vencimento + ".");