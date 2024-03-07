const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)]; // ... inclui o array na nova variável

console.log(nomesAtualizados);