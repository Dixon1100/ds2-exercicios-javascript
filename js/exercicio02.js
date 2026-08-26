// 1. Declaração das variáveis
const nome = "Dixon Ernesto Taberas Furones";
let idade = 26; 
const cidade = "São Roque";
const matriculado = true;
const nota = 9.5;

// 2. Exibindo cada valor no console
console.log("--- Valores ---");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("Matriculado:", matriculado);
console.log("Nota:", nota);

// 3. Exibindo o tipo de cada variável
console.log("--- Tipos ---");
console.log("Tipo de 'nome':", typeof nome);
console.log("Tipo de 'idade':", typeof idade);
console.log("Tipo de 'cidade':", typeof cidade);
console.log("Tipo de 'matriculado':", typeof matriculado);
console.log("Tipo de 'nota':", typeof nota);

/* 
Explicação sobre o uso de const e let:

- Utilizamos 'const' para nome, cidade, matriculado e nota porque são valores que, 
neste contexto, não precisam ser alterados depois de definidos. O uso de 'const' traz 
mais segurança, garantindo que essas informações não sejam reescritas acidentalmente.

- Utilizamos 'let' para a idade porque é uma informação mutável. Com o passar do tempo, 
a idade aumenta, então faz sentido declarar essa variável de uma forma que permita a 
atualização (reatribuição) do seu valor futuro ao longo do código.
*/