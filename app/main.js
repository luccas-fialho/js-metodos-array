let livros = []
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function buscarLivros() {
    const res = await fetch(url)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    criaLivros(livrosComDesconto)
}
