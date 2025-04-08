// Gestão de contas

// Calcular o saldo total das contas.
function calcularSaldoTotalContas(saldoConta01, saldoConta02) {
    let saldoTotal = saldoConta01 + saldoConta02;

    if (saldoTotal > 1000) {
        limiteContas = 0.10;
    } else {
        limiteContas = 0;
    }

    return saldoTotal;
}

let limiteContas = 0;

console.log("O saldo total das contas é: " + calcularSaldoTotalContas(300, 600));
console.log("O limite das contas é: " + limiteContas);


// Exibir um alerta se alguma conta estiver sem saldo ou utilizando o limite.
// Permitir depósitos em uma das contas.
