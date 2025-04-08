// Dia da Semana por Extenso

function obterDiaDaSemana (dia) {
    if (dia == 1) {
        diaNome = "Domingo";
    } else if (dia == 2) {
        diaNome = "Segunda-feira";
    } else if (dia == 3) {
        diaNome = "Terça-feira";
    } else if (dia == 4) {
        diaNome = "Quarta-feira";
    } else if (dia == 5) {
        diaNome = "Quinta-feira";
    } else if (dia == 6) {
        diaNome = "Sexta-feira";
    } else if (dia == 7) {
        diaNome = "Sábado";
    } else {
        diaNome = "Dia inválido!";
    }

    return diaNome;
}

console.log(obterDiaDaSemana(1));
console.log(obterDiaDaSemana(2));
console.log(obterDiaDaSemana(3));
console.log(obterDiaDaSemana(4));
console.log(obterDiaDaSemana(5));
console.log(obterDiaDaSemana(6));
console.log(obterDiaDaSemana(7));
console.log(obterDiaDaSemana(8));
