// exercicio08.js
const entrada = prompt("Digite um número inteiro para ver a tabuada:");
const numero = parseInt(entrada);

if (isNaN(entrada) || entrada.trim() === "" || !Number.isInteger(Number(entrada))) {
    console.log("Erro: Informe um número inteiro válido.");
} else {
    console.log(`--- Tabuada do ${numero} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}