// Desafio 04: Cálculo de distância de viagem e custo de combustível

let consumoCarroKmPorLitro = 12;

let distanciaTotalViagemEmKm = 140;

let precoLitroGasolina = 6.43;

let qtdLitrosViagem = distanciaTotalViagemEmKm / consumoCarroKmPorLitro;

let custoTotalCombustivel = qtdLitrosViagem * precoLitroGasolina;

console.log("Serão necessário " + qtdLitrosViagem.toFixed(2), "litros de gasolina para viagem.")
console.log("Vai custar R$ " + custoTotalCombustivel.toFixed(2), "para abastecer o carro.")

// Resolução do desafio:

let distanciaViagem = 600; // em km
let precoGasolina = 5.50; // em reais por litro

// Calcula a quantidade de gasolina necessária
let litrosNecessarios = distanciaViagem / 12;

// Calcula o custo total do combustível
let custoTotal = litrosNecessarios * precoGasolina;

console.log("Para uma viagem de " + distanciaViagem + 
    " km, você precisará de " + litrosNecessarios.toFixed(2) + 
    " litros de gasolina, que custará R$" + custoTotal.toFixed(2));