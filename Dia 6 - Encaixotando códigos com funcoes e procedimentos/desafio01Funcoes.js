// Crie uma função que utiliza o peso e a altura como parâmetros para calcular o IMC de uma pessoa.

function calculoImc (peso, altura) {
    let imc = peso / (altura ** 2);

    return imc.toFixed(2);
}

console.log("O IMC é: " + calculoImc(45, 1.58));
console.log("O IMC é: " + calculoImc(57, 1.58));
console.log("O IMC é: " + calculoImc(65, 1.58));
console.log("O IMC é: " + calculoImc(75, 1.58));
