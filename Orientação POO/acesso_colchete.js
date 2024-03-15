const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chaves) =>{
    console.log(`A chave ${chaves} tem valor ${cliente[chaves]}.`)
})
