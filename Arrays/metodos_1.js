const numeros = [1, 2, 3, 4, 5, 6]

numeros[0] = 100 // modifica os dados array indicado nos cochetes
numeros.push(6) //acrescenta um elemento no array

console.log(numeros.indexOf(4))     // qual o indice de um determinado elemento
console.log(numeros.indexOf(4, 4))  // tb podendo determinar onde esta o proximo dado
console.log(numeros.includes(10))   //
console.log(numeros.includes(6))    // identifica se um elemento ou dado esta dentro de um array

console.log(numeros.join('-'))      // acrecenta caracteres a todos os elementos de um array ex usando virgula ou traço e etc: 1,2,3,4 ou 1 - 2 - 3
console.log(numeros)                //


const numeros2 = numeros.concat(7, 8, 9) // metodo gera um novo array
console.log(numeros2)