let livros = []
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const sectionLivros = document.querySelector('#livros')

async function buscarLivros() {
    const res = await fetch(url)
    livros = await res.json()
    console.log(livros);
    criaLivros(livros)
}

function criaLivros(livros) {
    livros.forEach(livro => {
        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}

buscarLivros()
