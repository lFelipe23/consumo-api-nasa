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

* **Ajuste na URL de Busca:** Inicialmente, tentou-se implementar múltiplos filtros textuais simultâneos na API através de operadores lógicos. Como o mecanismo de busca da NASA interpreta os termos de forma literal, a resposta retornava vazia (zero resultados). A busca foi simplificada para um termo central estável (`q=nebula`), garantindo o retorno imediato de imagens ricas.
* **Correção de Caminho Relativo (Erro 404):** O arquivo HTML inicialmente buscava o script utilizando uma barra absoluta (`/script.js`), o que fazia o navegador procurar o arquivo na raiz do sistema e impedia o carregamento da lógica. O caminho foi corrigido para relativo (`script.js`), garantindo o vínculo perfeito entre os arquivos na mesma pasta.
* **Simplificação de Sintaxe para Maior Controle:** Códigos gerados preliminarmente utilizavam operadores de encadeamento opcional (`?.`) e coalescência nula (`??`). Para assegurar total domínio sobre o código e facilitar futuras manutenções, esses atalhos foram substituídos por estruturas condicionais tradicionais (`if`), tornando o fluxo de checagem de dados explícito.

---

## ⚠️ Limitações do Projeto

* **Foco no Carregamento Inicial:** Por se tratar de uma aplicação minimalista ("fazer o básico bem feito"), o site renderiza fixamente os 12 primeiros resultados retornados pela API, não incluindo paginação avançada ou barras de pesquisa em tempo real.
* **Fidelidade aos Dados Originais da NASA:** Algumas imagens retornadas (como a *N44C nebula*) exibem cortes ou blocos pretos de enquadramento. Isso não é um erro de renderização do site, mas sim a característica original das imagens científicas compostas por mosaicos de sensores de telescópios como o Hubble. O site preserva a integridade desses dados históricos sem aplicação de tratamentos estéticos invasivos.

---

## 📁 Estrutura do Projeto

O projeto foi organizado da seguinte forma para manter a simplicidade e a separação de responsabilidades (HTML para estrutura e JS para lógica):

```text
📦 consumo-api-nasa
 ┣ 📜 index.html    # Estrutura da página e chamadas do Tailwind CSS
 ┣ 📜 script.js     # Lógica de requisição à API e manipulação do DOM
 ┗ 📜 README.md     # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto Localmente

**Pré-requisitos:** Um navegador web atualizado (Chrome, Edge, etc).

**1. Clonar o Repositório**

```bash
git clone https://github.com/lFelipe23/consumo-api-nasa.git
cd consumo-api-nasa
```

**2. Executar a Aplicação**

Como o projeto utiliza tecnologias nativas (HTML, CSS via CDN e Vanilla JS), não é necessária a instalação de dependências no terminal. 

```text
Basta dar um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador, ou utilizar a extensão Live Server no VS Code.
```