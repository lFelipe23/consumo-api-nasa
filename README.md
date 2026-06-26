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

Para garantir um código alinhado com as diretrizes da disciplina e focado no "básico bem feito", foram tomadas as seguintes decisões de arquitetura:

1. **Escolha de API sem Autenticação:** Optou-se pela *NASA Image and Video Library API*. A escolha cumpre estritamente a recomendação de não utilizar APIs que consumam tokens ou chaves de acesso (API Keys), eliminando a necessidade de gerenciar credenciais ocultas no repositório.
2. **Simplificação de Sintaxe para Código Explicável:** O código gerado inicialmente apresentava recursos avançados do ES2020, como Encadeamento Opcional (`?.`) e Coalescência Nula (`??`). Visando manter o projeto perfeitamente alinhado com o escopo lecionado em aula e garantir total capacidade de defesa do código, esses atalhos foram substituídos por estruturas condicionais clássicas (`if` e `else`).
3. **Manipulação Nativa e Semântica do DOM:** Em vez de adotar frameworks ou lógicas complexas de renderização, o projeto utiliza métodos fundamentais de manipulação do DOM (`document.getElementById`, `document.createElement` e `appendChild`), iterando sobre os dados com um `.forEach` limpo e injetando o layout responsivo do Tailwind via Template Literals.

---

## 🔄 Diário de Bordo: Erros, Acertos e Alterações

Durante o ciclo de desenvolvimento, o projeto passou por melhorias importantes para atingir estabilidade:

* **Ajuste na URL de Busca:** Inicialmente, tentou-se implementar múltiplos filtros textuais simultâneos na API através de operadores lógicos. Como o mecanismo de busca da NASA interpreta os termos de forma literal, a resposta retornava vazia (zero resultados). A busca foi simplificada para um termo central estável (`q=nebula`), garantindo o retorno imediato de imagens ricas.
* **Correção de Caminho Relativo (Erro 404):** O arquivo HTML inicialmente buscava o script utilizando uma barra absoluta (`/script.js`), o que fazia o navegador procurar o arquivo na raiz do sistema e impedia o carregamento da lógica. O caminho foi corrigido para relativo (`script.js`), garantindo o vínculo perfeito entre os arquivos na mesma pasta.

---

## ⚠️ Limitações do Projeto

Como o objetivo era construir uma aplicação minimalista e robusta, foram mapeadas as seguintes limitações de escopo:

1. **Exibição de Resultados Estáticos:** O site realiza uma requisição única no carregamento inicial da página e renderiza fixamente os 12 primeiros resultados retornados pela API, não incluindo paginação, carregamento infinito ou barras de pesquisa dinâmica.
2. **Fidelidade aos Dados Originais da NASA:** Algumas imagens espaciais retornadas pela API (como a *N44C nebula*) apresentam blocos ou cortes pretos em suas quinas. Essa característica não decorre de falhas na renderização do código ou do Tailwind, mas reflete o formato original das fotografias científicas compostas por mosaicos de sensores de telescópios como o Hubble. O projeto optou por preservar a integridade histórica dos dados fornecidos pela agência.

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