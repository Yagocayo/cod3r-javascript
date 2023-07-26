//forma literal de escrever objetos nao vai ajudar pois acaba acarretando muito codigo duplicado

const data1 = {
    dia:12,
    mes:7,
    ano:2013,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia:10,
    mes:10,
    ano:2013,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
const data3 = {
    dia:01,
    mes:01,
    ano:2013,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data1.exibir())
console.log(data2.exibir())
console.log(data3.exibir())