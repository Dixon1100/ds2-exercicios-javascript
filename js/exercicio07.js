// exercicio07.js
const usuario = prompt("Digite o usuário:");
const senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

/* 
Diferença entre atribuição (=) e comparação estrita (===):
- O operador `=` (atribuição) é utilizado para atribuir ou alterar o valor de uma variável.
- O operador `===` (comparação estrita) é utilizado para comparar se dois valores são iguais 
  e se possuem o mesmo tipo de dado, sem realizar conversões implícitas.
*/