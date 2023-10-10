// fazendo a chamada da função direta ou pela variavel

function subtrair(a, b) {
    return a - b
}

const subtracao = subtrair

console.log(subtrair(5, 2))
console.log(subtracao(5, 2))