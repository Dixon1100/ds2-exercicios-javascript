## Exercício 1: Respostas

**Em qual momento uma página dinâmica é processada?**
A página dinâmica é processada exatamente no momento em que a requisição chega ao servidor. Antes de devolver o HTML ao navegador, o servidor executa scripts (como PHP, Python, Node.js), busca informações atualizadas e "monta" o HTML final (on-the-fly) para ser entregue ao cliente.

**Por que um banco de dados pode ser necessário?**
O banco de dados é fundamental para armazenar informações que variam e crescem com o tempo (dados de usuários, produtos, postagens, senhas, histórico de compras). Sem ele, seria impossível para o servidor buscar as informações necessárias para personalizar a página de cada usuário ou manter um sistema atualizado sem ter que reescrever arquivos manualmente o tempo todo.


## Exercício 2: Comparativo Client-side e Server-side

### Tabela Comparativa

| Característica | Client-side (Lado do Cliente) | Server-side (Lado do Servidor) |
| :--- | :--- | :--- |
| **Local de execução** | Navegador do usuário (Browser). | Máquina/Computador que hospeda o site (Servidor). |
| **Tecnologias** | HTML, CSS, JavaScript (React, Vue). | Node.js, PHP, Python, Java, Ruby, Banco de Dados. |
| **Responsabilidades** | Interface com o usuário (UI), experiência do usuário (UX), renderização visual, interações em tela. | Regras de negócio, segurança, acesso a banco de dados, autenticação de usuários, processamento pesado. |
| **Vantagens** | Respostas imediatas a cliques, alivia o servidor (menos requisições), navegação mais fluida. | Alta segurança (o usuário não vê o código), centralização de dados, maior poder de processamento. |
| **Limitações** | Depende do poder de processamento da máquina do usuário. O código é visível e vulnerável (não é seguro para regras críticas). | Exige requisição pela internet (pode gerar latência). Requer infraestrutura e custos de hospedagem. |
| **Exemplos de tarefas** | Animações visuais, validação prévia de formulários, menus interativos, carrossel de imagens. | Processar pagamentos, salvar arquivos no banco, verificar senhas, enviar e-mails automatizados. |

---

### Classificação das Operações

1. **Validar se um campo obrigatório foi preenchido**
   * **Classificação:** Ambos.
   * **Justificativa:** É feito no *client-side* para dar um feedback instantâneo e amigável ao usuário antes dele enviar o formulário. Porém, **deve** ser repetido no *server-side* para garantir a segurança, evitando que usuários mal-intencionados burlem a validação do navegador.

2. **Consultar dados sigilosos de um cliente**
   * **Classificação:** Server-side.
   * **Justificativa:** Dados sigilosos (como cartões, CPFs ou histórico médico) devem permanecer isolados e protegidos em bancos de dados no servidor. O cliente nunca deve ter acesso direto ou manipular as regras de acesso a essas informações.

3. **Alterar a cor de um botão após um clique**
   * **Classificação:** Client-side.
   * **Justificativa:** É uma alteração estritamente visual na interface (manipulação do DOM do HTML). Não há necessidade de gastar recursos de rede acionando o servidor para mudar a cor de um elemento.

4. **Verificar login e senha em um banco de dados**
   * **Classificação:** Server-side.
   * **Justificativa:** Por questões cruciais de segurança. O banco de dados fica no servidor e as senhas (que devem estar criptografadas) são comparadas lá. O código do navegador não tem e não pode ter acesso a essas informações.

5. **Calcular o total de uma compra**
   * **Classificação:** Ambos.
   * **Justificativa:** É calculado no *client-side* para que o usuário veja o preço atualizando dinamicamente enquanto adiciona itens no carrinho. Contudo, na hora de fechar o pedido, o *server-side* **deve** recalcular o total consultando os preços reais no banco de dados, para evitar que um usuário mal-intencionado adultere o valor final no navegador antes de pagar.

6. **Controlar uma sessão de usuário**
   * **Classificação:** Server-side (com auxílio do Client).
   * **Justificativa:** O servidor é o responsável final por determinar se uma sessão é válida, gerando tokens seguros ou gerenciando a sessão em memória. O *client-side* apenas guarda o identificador (via Cookies ou LocalStorage) e o envia de volta a cada nova requisição, mas a lógica de controle, expiração e invalidação pertence ao servidor.

---

   ### Erros no console

   **Exercicio01**
   * **Uncaught SyntaxError: Unexpected token '(' :** Esse erro significa que o JavaScript encontrou um parêntese de abertura ( em um lugar onde a regra da linguagem não permite. Basicamente, é um pequeno erro de sintaxe (digitação)

 **Exercicio04**
  * `20 + 5` pode resultar em `205` quando o valor `20` é recebido pelo `prompt()` sem conversão porque o `prompt()` sempre retorna o que o usuario digita em forma de texto (String), e não de numero.
