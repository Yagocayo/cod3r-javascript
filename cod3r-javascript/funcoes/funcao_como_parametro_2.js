/*function executar(fn) {
    if(typeof fn === "function") {
        console.log(fn(90, 50))
    }
}*/

function executar(fn, n1, n2) {
    if(typeof fn === "function") {
        console.log(fn(n1, n2))
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}
function modulo(a, b) {
    return a % b
}

/*executar(somar)
executar(subtrair)
executar(multiplicar)*/

executar(somar, 90, 50)
executar(subtrair, 90, 50)
executar(multiplicar, 90, 50)
executar(dividir, 90, 50)
executar(modulo, 10,3 )
