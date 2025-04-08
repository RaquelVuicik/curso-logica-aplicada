// Aplicação Financeira

function calculoInvestimento(valorInvestido, taxaJuros, anosInvestimento) {
    for (let ano = 1; ano <= anosInvestimento; ano++) {
        valorInvestido += valorInvestido * taxaJuros;
        console.log(`No final do ano ${ano}, o valor investido será de R$ ${valorInvestido.toFixed(2)}`);
    }
}

let valorInvestido = 1000;
let taxaJuros = 0.12;
let anosInvestimento = 10;

calculoInvestimento(valorInvestido, taxaJuros, anosInvestimento);
