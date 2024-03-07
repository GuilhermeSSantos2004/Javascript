const nomes = ["Evaldo", "Mari", "Camis"];


//forma 1 

nomes.forEach(function (nome) {
 console.log(nome);
});

// forma 2 

nomes.forEach((nome) => {
 console.log(nome);
});

// forma 3 

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);