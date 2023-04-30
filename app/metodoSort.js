let btnOdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    criaLivros(livrosOrdenados)
}