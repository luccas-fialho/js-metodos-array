const sectionLivros = document.querySelector('#livros')
const elementoComValorTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

function criaLivros(livros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    sectionLivros.innerHTML = ''
    livros.forEach(livro => {
        //let disponivel = verificaDisponivel(livro)
        let disponivel = livro.quantidade > 0 ? 'livro__imagens': 'livro__imagens indisponivel'

        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="${disponivel}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}

/* function verificaDisponivel(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'
    }
    return 'livro__imagens indisponivel'
} */

buscarLivros()