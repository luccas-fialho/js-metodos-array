const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    let livrosFiltrados = livrosComDesconto.filter(livro => livro.categoria == elementoBtn.value)
    criaLivros(livrosFiltrados);
}
