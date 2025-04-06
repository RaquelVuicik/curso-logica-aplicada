// Desafio 01: Rendimento de Aplicação Financeira

let valorInvestido = 1000; // o valor inicial investido
let taxaJuros = 0.12; // a taxa de juros anual
let anosInvestimento = 10; // quantidade de anos para o investimento

for (let ano = 1; ano <= anosInvestimento; ano++) {
    valorInvestido += valorInvestido * taxaJuros;
    console.log(`No final do ano ${ano}, o valor investido será de R$ ${valorInvestido.toFixed(2)}`);
}
