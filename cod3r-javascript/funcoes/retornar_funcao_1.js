function retornar() {

   function bomDia() {
    return "Bom dia!"
   }

   return bomDia

}

console.log(retornar)
console.log(retornar())
console.log(retornar()()) // posso usar assim ou

const umaFuncao = retornar() // ou assim
console.log(umaFuncao())