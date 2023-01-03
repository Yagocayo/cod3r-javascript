// 1° funçao com parametro e com retorno

function somar(a, b) {
    return a + b
}

let resultado = somar(30, 56)
console.log(resultado)
console.log(somar(30, 56))

// 2° funçao com parametro e sem retorno

 function exibirMultiplicacao(a, b){
    console.log(a * b)
 }
 exibirMultiplicacao(10 ,21)
 exibirMultiplicacao(5 ,20)

 // 3° funçao sem parametro e com retorno

 function retornaDataAtual() {
    return new Date()
 }
 console.log(retornaDataAtual())

 // 4° funçao sem parametro e sem retorno

 function exibirHoraAtual() {
    console.log(new Date().getHours())
 }

 exibirHoraAtual()