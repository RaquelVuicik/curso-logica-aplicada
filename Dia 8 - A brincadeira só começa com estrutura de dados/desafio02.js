// Desafio 02: Fila de Supermercado em Código

let fila = [];
// Adiciona um elemento ao final da fila
function entrarNaFila(nome) {
    fila[fila.length] = nome; // Isso é equivalente a fila.push(nome);
    console.log(`${nome} entrou na fila.`);
}

// Atende o primeiro cliente da fila
function atenderCliente( ) {
    if (fila.length > 0) {
    let clienteAtendido = fila[0];
    // Agora, vamos remover o primeiro elemento manualmente
    for (let i = 1; i < fila.length; i++) {
        fila[i - 1] = fila[i];
    }
    fila.length = fila.length - 1; // Isso é equivalente a fila.shift( );
    console.log(`${clienteAtendido} foi atendido.`);
    } else {
        console.log("Não há clientes na fila para atender.");
    }
}

function mostrarFila( ) {
    if (fila.length > 0) {
        console.log("Clientes na fila: " + fila.join(", "));
    } else {
        console.log("A fila está vazia.");
    }
}

// Vamos testar as funções
entrarNaFila("João");
entrarNaFila("Maria");
entrarNaFila("Pedro");

mostrarFila();

atenderCliente();

mostrarFila();
