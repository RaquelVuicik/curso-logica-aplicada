// Informe para um aluno a sua performance em uma prova a partir da sua nota.

let nota = 9;
let performance = "";

if (nota < 5) {
    performance = "Insuficiente.";
} else if (nota < 6) {
    performance = "Regular.";
} else if (nota < 7.5) {
    performance = "Bom.";
} else if (nota < 9) {
    performance = "Muito bom.";
} else {
    performance = "Excelente!";
}

console.log("Sua nota foi: " + nota + " e sua performance foi: " + performance);
