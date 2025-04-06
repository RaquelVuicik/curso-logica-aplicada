// Condicao Ternária : Escreva um código que determina se o cliente 
// pode fazer compras com sua conta. As condições para poder comprar são:

let saldo = 600.00;
let clienteInativo = false; // cliente ativo.

let podeComprar = (!clienteInativo && saldo > 500)  ? true : false;

console.log(podeComprar);