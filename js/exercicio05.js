let entradaidade = prompt("Digite sua idade")

if(entradaidade === null ||entradaidade.trim() ===""|| isNaN(entradaidade)){
    console.log("Idade Inválida");
}else{
    const idade = parseInt(entradaidade)
   
    // Validaçao da idade negativa
    if(idade<0){
        console.log("Idade Inválida")
        // Validaçao idade menor que 16
    }else if (idade < 16){
        console.log("Não pode votar")
        // validaçao idade maior igual 18
    }else if (idade >= 18){    
        console.log("Voto obrigatorio")
        // validaçao idade entre 16 e 17
    }else{
        console.log("Voto opcional")
    }
}





