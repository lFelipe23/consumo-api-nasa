console.log("O JavaScript está conectado e rodando!");
// === Galeria de Fenômenos Astronômicos ===
// Consome a API pública da NASA Image and Video Library

// 1) URL da API com a busca pelos temas desejados
const API_URL = "https://images-api.nasa.gov/search?q=nebula&media_type=image";

// 2) Referências aos elementos do DOM onde os cards serão inseridos
const galeria = document.getElementById("galeria");
const status = document.getElementById("status");

// 3) Função assíncrona que busca os dados na API
const carregarImagens = async () => {
  try {
    // 3.1) Faz a requisição usando fetch + await
    const resposta = await fetch(API_URL);

    // 3.2) Se a resposta não for OK, lança erro para o catch
    if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);

    // 3.3) Converte o corpo da resposta em JSON
    const json = await resposta.json(); 

    // 3.4) A API retorna os resultados em collection.items
    //      Pegamos apenas os 12 primeiros itens
    const itens = json.collection.items.slice(0, 12);

    // 3.5) Limpa a mensagem de "Carregando..."
    if (status) status.remove();

    // 3.6) Itera sobre cada item e cria um card no DOM
    itens.forEach((item) => {
      // 1. Extraindo a imagem com if tradicional
      let imagem = "";
      if (item.links && item.links.length > 0) {
        imagem = item.links[0].href;
      }

      // 2. Extraindo título e descrição com if tradicional
      let titulo = "Sem título";
      let descricao = "Sem descrição disponível.";

      if (item.data && item.data.length > 0) {
        if (item.data[0].title) {
          titulo = item.data[0].title;
        }
        if (item.data[0].description) {
          descricao = item.data[0].description;
        }
      }

      // 3. Cortando a descrição se for muito grande
      let descricaoCurta = descricao;
      if (descricao.length > 180) {
        descricaoCurta = descricao.slice(0, 180) + "...";
      }

      // Monta o HTML do card usando template literal
      const card = document.createElement("article");
      card.className =
        "bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300";

      card.innerHTML = `
        <div class="aspect-video overflow-hidden bg-slate-950">
          <img src="${imagem}" alt="${titulo}" loading="lazy"
               class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="p-5">
          <h2 class="text-lg font-semibold text-indigo-200 mb-2">${titulo}</h2>
          <p class="text-sm text-slate-400 leading-relaxed">${descricaoCurta}</p>
        </div>
      `;

      // Insere o card no container da galeria
      galeria.appendChild(card);
    });
  } catch (erro) {
    // 4) Em caso de erro, mostra mensagem amigável
    console.error("Falha ao carregar imagens:", erro);
    if (status) {
      status.textContent = "Não foi possível carregar as imagens. Tente novamente mais tarde.";
      status.className = "col-span-full text-center text-red-400";
    }
  }
};

// 5) Dispara o carregamento assim que a página estiver pronta
carregarImagens();