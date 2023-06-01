
const conceito = 'a+'

switch(conceito) {
    case 'A+' && 'a+': console.log(10); break
    case 'A' && 'a': console.log(9); break
    case 'B+' && 'b+': console.log(8); break
    case 'B' && 'b': console.log(7); break
    case 'C+' && 'c+': console.log(6); break
    case 'C' && 'c': console.log(5); break
    case 'D+' && 'd+': console.log(4); break
    case 'D' && 'd': console.log(3); break
    case 'E+' && 'e+': console.log(2); break
    case 'E' && 'e': console.log(1); break
    case 'F' && 'f': console.log(0); break
    default: console.log('conceito inválido')

}