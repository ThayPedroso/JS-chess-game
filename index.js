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
    let linha1 = []
    let linha2 = []
    let linha3 = []
    let linha4 = []

    for (let posicao of tabuleiro) {
        if (posicao[0][1] == 1) linha1.push(posicao[1].nome || " ")
        if (posicao[0][1] == 2) linha2.push(posicao[1].nome || " ")
        if (posicao[0][1] == 3) linha3.push(posicao[1].nome || " ")
        if (posicao[0][1] == 4) linha4.push(posicao[1].nome || " ")
    }
    console.log(linha1);
    console.log(linha2);
    console.log(linha3);
    console.log(linha4);
}

console.log('Antes da movimentação --------');
imprimirTabuleiro(tabuleiro)
moverPeca(tabuleiro, 'b1', 'd1')
console.log('Depois da movimentação --------');
imprimirTabuleiro(tabuleiro)


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
