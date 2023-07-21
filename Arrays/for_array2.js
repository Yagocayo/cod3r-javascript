/*foreach

for(let nota of notas ){
    console.log(nota)
}*/


//forof




const notas = [7, 8, 3, 5, 10, 9, 8, 8]

let valores = ''

for(let nota of notas){//valores
    valores += nota + ' '
}

console.log(valores)


//forin

let indices = ''

for(let indice in notas){ //indices 
    indices += indice + ' '
}

console.log(indices)