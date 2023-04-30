const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados =  categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livrosComDesconto.filter(livro => livro.categoria == categoria)
    criaLivros(livrosFiltrados);
}
