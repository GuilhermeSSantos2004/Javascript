const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1,2, 'Rodrigo'); // remove e adiciona elemento 
listaEstudantes.splice(0,0, 'Guilherme'); // add sem remover elemento 

console.log(listaEstudantes);
