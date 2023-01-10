const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 2.7;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;

}
function madia(n1, n2, n3){
    const menorNota = minimo (n1, minimo(n2, n3));

    if(menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (MenorNota === n2) {
        return (n1 + n3 ) / 2;
    } else {
        
    }

      }
}

console.log()
