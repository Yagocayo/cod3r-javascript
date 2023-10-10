const numeros = [10, 20, 30, 40, 50, 60]

//01 exemplo

//   for (let i = 0; i < numeros.length; i++) {
//       console.log(numeros[i]);
//   }
//   for (let n of numeros){
//     console.log(n)
//   }

//02 exemplo

function PraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}

numeros.forEach(PraCadaElemento)


numeros.forEach(function (el) {
    console.log(el)

})

numeros.forEach(function (_, i) {
    console.log(i)
})

//usando funcão dentro de parametros 