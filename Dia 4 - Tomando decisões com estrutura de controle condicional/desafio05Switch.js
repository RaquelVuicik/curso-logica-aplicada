// Desafio 05: Cancela de Estacionamento

let estado = "Fechada";

switch (estado) {
    case "Aberta":
        console.log("A cancela está aberta. Por favor, entre.");
        break;
    case "Fechada":
        console.log("A cancela está fechada. Por favor, aguarde a liberação.");
        break;
    case "Manutenção":
        console.log("A cancela está em manutenção. Por favor, use a outra entrada.");
        break;
    default:
        console.log("Estado desconhecido.");
}
