// desafio-final.js
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Recuperação";
    return "Reprovado";
}

let continuar = true;
let totalAlunos = 0;

while (continuar) {
    const nome = prompt("Digite o nome do aluno:");
    const curso = prompt("Digite o nome do curso:");
    
    let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
    let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));

    // Validação de notas
    while (isNaN(nota1) || nota1 < 0 || nota1 > 10 || isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        alert("Notas inválidas! Devem estar entre 0 e 10.");
        nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
        nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));
    }

    const media = calcularMedia(nota1, nota2);
    const situacao = classificarMedia(media);
    totalAlunos++;

    console.log("==================================");
    console.log("       FICHA ACADÊMICA DO ALUNO     ");
    console.log("==================================");
    console.log(`Aluno: ${nome}`);
    console.log(`Curso: ${curso}`);
    console.log(`Nota 1: ${nota1.toFixed(1)}`);
    console.log(`Nota 2: ${nota2.toFixed(1)}`);
    console.log(`Média Final: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
    console.log("==================================");

    const resposta = prompt("Deseja cadastrar outro aluno? (sim/nao):").toLowerCase();
    if (resposta !== "sim" && resposta !== "s") {
        continuar = false;
    }
}

console.log(`Total de alunos cadastrados: ${totalAlunos}`);