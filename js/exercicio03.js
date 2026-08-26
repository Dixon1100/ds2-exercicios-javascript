const nome = prompt("Qual é seu nome")
let idade = prompt("Qual é sua idade")
const curso = prompt("Qual é seu curso")
const cidade = prompt ("Qual é sua cidade")

// Solução 1
console.log("Soluçao 1")
console.log("Olá meu nome é " +nome , ", tenho " +idade ,"anos", ", moro em " +cidade , " e estou cursando " +curso)

console.log("======================")


// Solução 2
const templateSting =`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`;

console.log("Soluçao 2")
console.log(templateSting)