const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão: executada apenas uma vez (variável de inicialização)
//segunda expressão: condição de execução (variavél de condição)
//terceira expressão: executada sempre ao final do bloco (incremento)

for (let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice])
}
