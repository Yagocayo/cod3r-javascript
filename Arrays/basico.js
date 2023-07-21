//array é uma forma de armazenar varios dados em uma unica variavel 'estrutura' é indexada (organizada por indices para acessar os dados)

// mesmo sendo a variavel const o array pode ser alterado seus dados nos indices (elementos)


//  indice  ->  0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]

console.log(notas)
console.log(notas[3])
console.log(notas[5])
console.log(notas[10])

notas[4] = 8.7 // forma de alterar o valor do indice 4 do array
console.log(notas)
