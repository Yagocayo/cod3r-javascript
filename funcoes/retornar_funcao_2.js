//retornando funçao anonima

function retornaUmaFuncao() {
    return function () {
        return "Boa tarde!"
    }
}

console.log(retornaUmaFuncao)
console.log(retornaUmaFuncao())
console.log(retornaUmaFuncao()())