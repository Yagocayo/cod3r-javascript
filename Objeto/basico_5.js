
const cliente = { //objeto
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: { //objeto
        logradouro: 'rua Abc', 
        numero:123,
        complemento: 'apto 101 Bloco B',
        //array
        pontosREf: [
            {nome: 'Hospital x', muitoProximo: true},
            {nome: 'shopping', muitoProximo: false},
        ]
    },
    nomeFilhos:['bia', 'carlos', 'Gabriel'] //array
}
console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.pontosREf[0].muitoProximo)// idenfificando array por indice