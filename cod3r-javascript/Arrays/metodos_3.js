const numeros = [10, 20, 30, 40, 50, 60]

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