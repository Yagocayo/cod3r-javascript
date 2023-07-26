

//simplificando objetos

function criarData(dia,mes,ano){
    return {
        //chave: valor
        //dia:dia, //podemos simplificar quando forem o mesmo valor
        //mes:mes,
        //ano:ano,
        dia,
        mes,
        ano,
        //simplificando tb
        // exibir: function() {
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }

    } 
    
}

const d1 = criarData(9,2,2010)
const d2 = criarData(22,11,2023)
const d3 = criarData(3,4,2022)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())