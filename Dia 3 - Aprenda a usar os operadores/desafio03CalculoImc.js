// Cálculo IMC

let peso = 57; // 45 abaixo; 57 normal; 65 sobrepeso; 75 obesidade.
let altura = 1.58;

let imc = peso / (altura ** 2);

console.log("O IMC é : " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Você está abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Você está com peso normal");
} else if (imc >= 24.9 && imc < 29.9) {
    console.log("Você está com sobrepeso");
} else {
    console.log("Você está com obesidade");
}