// Desafio 06: Sistema de PDV (Ponto de Venda)

let produto = "Alimentos";
let preco = 100.00;
let desconto = 0;

switch (produto) {
    case "Alimentos":
        desconto = 0.05;
        break;
    case "Eletrônicos":
        desconto = 0.10;
        break;
    case "Roupas":
        desconto = 0.20;
        break;
    case "Livros":
        desconto = 0.50;
        break;
    default:
        desconto = 0;
}

let valorFinal = preco * (1 - desconto);
console.log(`O valor final do produto é R$${valorFinal.toFixed(2)}.`);