/* array e reprsentado por [] e objeto por {}

array e organizado por indece(posição) e elmento(conteudo)
objeto e organizado por chave e valor


let x = 3
let y = []

console.log(Array.isArray(x)) testando se é um array



const produto = {
    nome: 'caneta'
}
console.log(typeof produto)*/

//object

const numeros = [10, 20, 30]
const produto = {
     nome: 'Caneta',
     preco: 9.99,
     desconto: 0.2
}
console.log(numeros[0])
console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])


console.log(produto.nome)
console.log(numeros.preco)
console.log(numeros.desconto)

console.log(typeof produto)
