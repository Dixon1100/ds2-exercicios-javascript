const nome = prompt("Digite seu nome")
const notaentrada1= prompt("Digite a nota da P1")
const notaentrada2 = prompt("Digite a nota da P2")

const nota1 = parseFloat(notaentrada1)
const nota2 = parseFloat(notaentrada2)
let situacao ="";

const media = (nota1 + nota2) / 2  //calculo da media

if(isNaN(nota1)||isNaN(nota2) || nota1 < 0 || nota1 > 10 & nota2 < 0 || nota2 > 10){
    console.log("Nota invalida")
}else{

    if(media >= 7 ){
      situacao = " está aprovado"
        
    }else if(media < 5){
        situacao = " está reprovado";
        
    }else{
        situacao = "tem que fazer a recuperação"
    }


    console.log(nome, " você tem notas " +nota1.toFixed(1), "e " +nota2.toFixed(1), " , sua média é " +media.toFixed(1), "você  " +situacao)
}
