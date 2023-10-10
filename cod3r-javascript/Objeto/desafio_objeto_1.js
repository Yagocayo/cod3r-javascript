const data = {
    dia:12,
    mes:7,
    ano:2013,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 31

console.log(data.exibir())