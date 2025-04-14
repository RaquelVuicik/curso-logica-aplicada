// Recrie o slice, fazendo o seu dá sua maneira.

const carrosMaisVendidos = [
	'Fiat Strada',
	'Fiat Argo',
	'Hyundai HB20' ,
	'Chevrolet Onix',
	'Volkswagen Gol',
	'Renault Kwid',
	'Fiat Mobi',
	'Jeep Renegade' ,
	'Volkswagen T-Cross' ,
	'Toyota Corolla'
];

function extrairTop5Carros(carrosMaisVendidos, inicio = 0, fim = carrosMaisVendidos.length) {
    if (fim > inicio) {
        console.log('Cópia do array de carros mais vendidos feita com sucesso')
    } else {
        console.log(carrosMaisVendidos);
    }
}

extrairTop5Carros();

// Função que simula o comportamento do slice
function extrairPorcao(array, inicio = 0, fim = array.length) {
    let porcao = [];

    // Caso o início seja negativo, converte para o equivalente positivo
    if (inicio < 0) inicio = array.length + inicio;
    // Caso o fim seja negativo, converte para o equivalente positivo
    if (fim < 0) fim = array.length + fim;

    for (let i = inicio; i < fim && i < array.length; i++) {
        porcao.push(array[i]);
    }

    return porcao;
}

console.log(extrairPorcao(carrosMaisVendidos, 0, 10));