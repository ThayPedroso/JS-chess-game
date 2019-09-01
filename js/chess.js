function criarPeca(nome, posicaoTabuleiro, cor) {
    return {
        nome,
        posicaoTabuleiro, // chave Map a1, a2
        cor,
        qteMovimentos: 0,
        incrementarQtdMovimentos() {
            this.qteMovimentos++
            return this.qteMovimentos
        }
    }
}

const pecaT1Branca = criarPeca('T', 'a1', 'branca')
const pecaT2Branca = criarPeca('T', 'b1', 'branca')
const pecaRBranca = criarPeca('R', 'a2', 'branca')
const pecaDBranca = criarPeca('D', 'b2', 'branca')

const tabuleiro = new Map([
    ['a1', pecaT1Branca ],
    ['b1', pecaT2Branca ],
    ['c1', {}],
    ['d1', {}],
    ['a2', pecaRBranca ],
    ['b2', pecaDBranca ],
    ['c2', {}],
    ['d2', {}],
    ['a3', {}],
    ['b3', {}],
    ['c3', {}],
    ['d3', {}],
    ['a4', {}],
    ['b4', {}],
    ['c4', {}],
    ['d4', {}],
])

function imprimirTabuleiro(tabuleiro) {

    for (let posicao of tabuleiro) {
        document.getElementById(posicao[0]).innerHTML = posicao[1].nome || "-"
    }
}

imprimirTabuleiro(tabuleiro)

function movePieces() {

    let origin = document.getElementsByClassName("From")[0].value
    let destiny = document.getElementsByClassName("To")[0].value

    moverPeca(tabuleiro, origin, destiny)
    imprimirTabuleiro(tabuleiro)

}

function moverPeca(tabuleiro, origem, destino) {
    let pecaTransf = {}
    pecaTransf = tabuleiro.get(origem)
    tabuleiro.set(destino, pecaTransf)
    tabuleiro.set(origem, {})
}

function posicaoValida(tabuleiro, posicao) {
    const resultado = tabuleiro.has(posicao) ? true : false
    return resultado
}

function validarPosicao(tabuleiro, posicao) {
    if (!posicaoValida(tabuleiro, posicao)) {
        console.log('Posição inválida!')
        return false
    }
    return true
}

validarPosicao(tabuleiro, 'a1')
// validarPosicao(tabuleiro, 'a8')
