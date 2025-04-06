// Desafio 03: Cálculo de Juros

let investimento = 100.00; // investimento inicial
let taxaJuros = 0.05; // taxa de juros ao ano
let ano = 0;
let objetivo = investimento * 2;

while (investimento < objetivo) {
    investimento += investimento * taxaJuros;
    ano++;
}

console.log(`Para que o investimento inicial dobre levará ${ano} anos.`);
