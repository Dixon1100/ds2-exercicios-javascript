// exercicio10.js
const usuarioCorreto = "admin";
const senhaCorreta = "1234";
const maxTentativas = 3;
let tentativas = 0;
let acessoPermitido = false;

while (tentativas < maxTentativas && !acessoPermitido) {
    const usuario = prompt("Usuário:");
    const senha = prompt("Senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Acesso permitido");
        acessoPermitido = true;
    } else {
        tentativas++;
        const restantes = maxTentativas - tentativas;
        if (restantes > 0) {
            console.log(`Senha incorreta. Restam ${restantes} tentativa(s).`);
        } else {
            console.log("Acesso bloqueado");
        }
    }
}