export default function lista() {
    return (
        <div>
            {gerarLista(20)}
        </div>
    )
}

function gerarLista(n = 10) {
    const lista = []
    for (let i = 1; i <= n; i++) {
        lista.push(<span>{i}, </span>)
    }
    return lista
}