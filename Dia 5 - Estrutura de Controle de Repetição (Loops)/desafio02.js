// Desafio 02: Contagem regressiva para lançamento de foguete

let contagemRegressiva = 10;

while (contagemRegressiva >= 0) {

    if (contagemRegressiva <= 3) {
        console.log("Atenção! " + contagemRegressiva);
    } else {
        console.log(contagemRegressiva);
    }
    contagemRegressiva -= 1;
}

console.log("Lançamento do foguete!");


// Em for:

for (let i = 10; i >= 0; i--) {
    if (i <= 3) {
        console.log("Atenção! " + i);
    } else {
        console.log(i);
    }
}

console.log("Lançamento do foguete!");
