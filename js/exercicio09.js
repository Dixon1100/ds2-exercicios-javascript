// exercicio09.js
let quantidade = 0;
let soma = 0;
let maior = null;
let menor = null;

let entrada = prompt("Digite um número (digite 0 para encerrar):");
let numero = parseFloat(entrada);

if (isNaN(numero)) {
    console.log("Valor inválido.");
} else if (numero === 0) {
    console.log("O primeiro valor digitado foi zero. Nenhum número foi processado.");
} else {
    while (numero !== 0) {
        if (!isNaN(numero)) {
            quantidade++;
            soma += numero;

            if (maior === null || numero > maior) {
                maior = numero;
            }
            if (menor === null || numero < menor) {
                menor = numero;
            }
        }
        
        entrada = prompt("Digite outro número (0 para encerrar):");
        numero = parseFloat(entrada);
    }

    const media = soma / quantidade;

    console.log("--- Estatísticas dos Números ---");
    console.log(`Quantidade de números digitados: ${quantidade}`);
    console.log(`Soma dos números: ${soma}`);
    console.log(`Média dos valores: ${media.toFixed(2)}`);
    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
}