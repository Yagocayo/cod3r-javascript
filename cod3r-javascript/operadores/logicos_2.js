const t1 = true
const t2 = true

//console.log('Vamos compra a tv de 50" ? ' + (t1 && t2))
let comprarTV50 = t1 && t2 // -> && AND, E
console.log('Vamos comprar a tv 50"? ', t1 && t2) // -> && AND, E

let comprarTV32 = t1 !== t2
console.log('Vamos comprar a tv 32"? ', t1 !== t2) // -> !==  XOR, OU exclusivo

let tomarSorvete = t1 || t2 //-> ||  OR, OU
console.log('Vamos comprar sorvete "? ', tomarSorvete) 

let ficarEmCasa = !tomarSorvete // -> ! NOT
console.log('vamos ficar em casa?' , ficarEmCasa ) 
