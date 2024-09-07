function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Se o campo de pesquisa estiver vazio, exibe uma mensagem
  if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado.pesquise jogos desse ano </p>";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML
  let resultados = "";
 
  // Itera sobre cada dado no array de dados
  for (let dado of dados) {
    // Converte todos os valores relevantes para minúsculo
    const titulo = dado.titulo.toLowerCase();
    const descricao = dado.descricao.toLowerCase();

    // Verifica se tags é um array e converte cada elemento para minúsculo
    const tagsMinusculas = Array.isArray(dado.tags) ? dado.tags.map(tag => tag.toLowerCase()) : [];

    // Se o campo de pesquisa estiver presente em algum dos campos, adiciona o resultado
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tagsMinusculas.some(tag => tag.includes(campoPesquisa))) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          </p> <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
      `;
    }
  }

  if(!resultados) {
    resultados = "<p>Nada foi encontrado</p> "
    
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}