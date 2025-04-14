// Desafio 01: Braço Mecânico para Empilhar Produtos

let caixa = [];

function empilharProdutos(produto) {
    if (caixa.length < 10) {
        caixa.push(produto);
        console.log(`Produto ${produto} adicionado a caixa.`) 
    }
    
    if (caixa.length === 10) {
        enviarProdutos();
    }
}

function enviarProdutos() {
    console.log("A caixa está cheia. Enviando para selagem e despacho...");
    selarDespachar(caixa);
    caixa = []; // cria nova caixa vazia
}

function selarDespachar(caixaSelada) {
    console.log("Caixa selada com os seguintes produtos:");
    console.log(caixaSelada.join(", "));
    console.log("Caixa despachada com sucesso!\n");
}

const produtos = [
    'Shampoo',
    'Condicionador',
    'Sabonete',
    'Creme dental',
    'Escova de dentes', 
    'Desodorante',
    'Toalha',
    'Pente',
    'Hidratante corporal',
    'Esponja de banho',
    'Fio dental'
];

produtos.forEach(produto => empilharProdutos(produto));

// Resolução desafio: Braço Mecânico para Empilhar Produtos
let pilhaDeProdutos = [];
const CAPACIDADE_MAXIMA = 10;

function empilharProduto(produto) {
    if (pilhaDeProdutos.length < CAPACIDADE_MAXIMA) {
        pilhaDeProdutos.push(produto);
        console.log(`${produto} empilhado.`);
    } else {
        console.log("Caixa cheia. Enviando para selagem e despacho.");
        pilhaDeProdutos = []; // Inicia uma nova pilha
        pilhaDeProdutos.push(produto);
        console.log(`Produto ${produto} empilhado na nova caixa.`);
    }
}

// Simulando a esteira com 40 produtos
const TOTAL_PRODUTOS_ESTEIRA = 40;
for (let i = 1; i <= TOTAL_PRODUTOS_ESTEIRA; i++) {
    empilharProduto(`Produto ${i}`);
}