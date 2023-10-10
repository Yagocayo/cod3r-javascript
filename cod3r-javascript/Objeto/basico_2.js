//objeto é composto por atributos e metodos(comportamentos, membros)
const produto = {
    nome: 'ipad',
    preco: 5600,
    desconto: 0.5,
    precoComDesconto: function () {
        return this.preco *(1 - this.desconto)// forma de indicar o atributo dentro do metodo do proprio objeto
    }
}
console.log(produto.nome)
console.log(produto.precoComDesconto())