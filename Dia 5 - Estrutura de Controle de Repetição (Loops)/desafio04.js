// Desafio 04: Compra Parcelada

let valorProduto = 200.00; // valor total do produto
let numeroParcelas = 12; // número de parcelas sem juro
let contadorParcela = 1;

let valorParcela = valorProduto / numeroParcelas; // valor de cada parcela

while (contadorParcela <= numeroParcelas) {
    valorParcela;
    valorProduto -= valorParcela;
    
    console.log(`A parcela ${contadorParcela} terá o valor de R$ ${valorParcela.toFixed(2)} e o valor restante a ser pago é de R$ ${valorProduto.toFixed(2)}`);

    contadorParcela++;
}
