 let temDinheiro = false
let estaEnsolarado = false
let carroEstaNaGaragem = false

// utilizando E ""
let resultadoE = '(AND) 1- vai pro shopping?'
resultadoE += temDinheiro && estaEnsolarado

console.log(resultadoE)

let resultadoOU = '2- vai pro shopping?'
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU) 

console.log(true !== true)
console.log(true !== false)
console.log(false !== true)
console.log(false !== false)

console.log( 'não verdadeiro: ' + !true)
console.log(' nao falso ' + !false)

/*
E, AND = &&
OU, OR = ||
OU exclusivo, xor = !==
*/