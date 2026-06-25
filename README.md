# Galeria de Fenômenos Astronômicos 🌌

Um projeto front-end minimalista e responsivo que consome o acervo real de imagens da NASA para exibir fenômenos astronômicos e celestes (como eclipses, nebulosas e fases da lua). 

Desenvolvido como parte de uma atividade acadêmica com foco em consumo de APIs públicas, manipulação assíncrona do DOM e estilização moderna.

---

## 👥 Para Quem Não é da Área: O que este site faz?
Imagine que você quer ver fotos reais capturadas pelos telescópios da NASA sem precisar entrar no site deles e pesquisar manualmente. Este site faz esse trabalho por você! 

Assim que você abre a página, o nosso código "viaja" até o banco de dados público da NASA, pede as 12 imagens mais recentes sobre fenômenos espaciais, organiza essas fotos com seus respectivos títulos e explicações científicas, e monta um mural visualmente limpo e bonito automaticamente na sua tela.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da página.
* **Tailwind CSS (via CDN):** Estilização rápida, moderna e totalmente responsiva (se adapta a telas de computadores, tablets e celulares).
* **JavaScript Puro (Vanilla JS - ES6+):** Lógica de programação para buscar os dados externos e desenhar a interface dinamicamente.

---

## 📐 Decisões Técnicas

Para garantir um código limpo, didático e alinhado com boas práticas de desenvolvimento front-end, foram tomadas as seguintes decisões:

1.  **Consumo de API sem Tokens:** Foi utilizada a *NASA Image and Video Library API*. A escolha se deu pelo fato de ser uma API robusta, totalmente pública e que **não exige chaves de autenticação (tokens)**, simplificando a arquitetura da requisição e eliminando riscos de exposição de credenciais no repositório público.
2.  **Manipulação Clássica do DOM:** Em vez de utilizar frameworks pesados ou métodos complexos de inserção de código, optou-se pela criação direta de elementos através de `document.createElement`, injeção controlada de conteúdo com `innerHTML` e acoplamento seguro usando `appendChild`.
3.  **Código Explicável e Didático:** A lógica JavaScript utiliza funções modernas (*Arrow Functions*), declarações seguras de escopo (`const` e `let`), e estruturas assíncronas (*async/await*) protegidas por blocos de tratamento de erros (*try/catch*). A sintaxe foi intencionalmente mantida limpa e baseada em estruturas de controle tradicionais (`if`) para garantir legibilidade máxima.

---

## 🔄 Diário de Bordo: Erros, Acertos e Alterações

Durante o ciclo de desenvolvimento, o projeto passou por melhorias importantes para atingir estabilidade:

* **Ajuste na URL de Busca:** Inicialmente, tentou-se implementar múltiplos filtros textuais simultâneos na API através de operadores lógicos. Como o mecanismo de busca da NASA interpreta os termos de forma literal, a resposta retornava vazia (zero resultados). A busca foi simplificada para um termo central estável (`q=eclipse`), garantindo o retorno imediato de imagens ricas.
* **Correção de Caminho Relativo (Erro 404):** O arquivo HTML inicialmente buscava o script utilizando uma barra absoluta (`/script.js`), o que fazia o navegador procurar o arquivo na raiz do sistema e impedia o carregamento da lógica. O caminho foi corrigido para relativo (`script.js`), garantindo o vínculo perfeito entre os arquivos na mesma pasta.
* **Simplificação de Sintaxe para Maior Controle:** Códigos gerados preliminarmente utilizavam operadores de encadeamento opcional (`?.`) e coalescência nula (`??`). Para assegurar total domínio sobre o código e facilitar futuras manutenções, esses atalhos foram substituídos por estruturas condicionais tradicionais (`if`), tornando o fluxo de checagem de dados explícito.

---

## ⚠️ Limitações do Projeto

* **Foco no Carregamento Inicial:** Por se tratar de uma aplicação minimalista ("fazer o básico bem feito"), o site renderiza fixamente os 12 primeiros resultados retornados pela API, não incluindo paginação avançada ou barras de pesquisa em tempo real.
* **Fidelidade aos Dados Originais da NASA:** Algumas imagens retornadas (como a *N44C nebula*) exibem cortes ou blocos pretos de enquadramento. Isso não é um erro de renderização do site, mas sim a característica original das imagens científicas compostas por mosaicos de sensores de telescópios como o Hubble. O site preserva a integridade desses dados históricos sem aplicação de tratamentos estéticos invasivos.

---

## 🚀 Como Executar o Projeto Localmente

1.  Baixe ou clone este repositório para a sua máquina.
2.  Certifique-se de que os arquivos `index.html` e `script.js` estão guardados dentro da mesma pasta.
3.  Abra o arquivo `index.html` diretamente em qualquer navegador web de sua preferência (ou utilize a extensão *Live Server* no VS Code).
4.  O site irá carregar automaticamente os dados vindos direto do espaço!