const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};
  
cliente.endereco = {
    rua: "r. Joseph Climber",
    numero: 1237,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);

console.log(cliente["endereco"]); // or console.log(cliente.endereco)
