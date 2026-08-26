## Exercício 1: Respostas

**Em qual momento uma página dinâmica é processada?**
A página dinâmica é processada exatamente no momento em que a requisição chega ao servidor. Antes de devolver o HTML ao navegador, o servidor executa scripts (como PHP, Python, Node.js), busca informações atualizadas e "monta" o HTML final (on-the-fly) para ser entregue ao cliente.

**Por que um banco de dados pode ser necessário?**
O banco de dados é fundamental para armazenar informações que variam e crescem com o tempo (dados de usuários, produtos, postagens, senhas, histórico de compras). Sem ele, seria impossível para o servidor buscar as informações necessárias para personalizar a página de cada usuário ou manter um sistema atualizado sem ter que reescrever arquivos manualmente o tempo todo.