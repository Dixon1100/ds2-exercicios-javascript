// exercicio11.js
function somar(numero1, numero2) {
    return numero1 + numero2;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Recuperação";
    return "Reprovado";
}

function criarSaudacao(nome) {
    return `Olá, ${nome}! Seja muito bem-vindo(a).`;
}

// Armazenando resultados em variáveis e exibindo no console
const resultadoSoma = somar(10, 15);
const resultadoMedia = calcularMedia(8.5, 6.0);
const resultadoClassificacao = classificarMedia(resultadoMedia);
const resultadoSaudacao = criarSaudacao("Dixon");

console.log(resultadoSaudacao);
console.log(`Soma: ${resultadoSoma}`);
console.log(`Média: ${resultadoMedia.toFixed(1)}`);
console.log(`Classificação: ${resultadoClassificacao}`);