// USO DO FOR 

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

for (let i =0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`)

// USO DO FOREACH 

const notas1 = [10, 6.5, 8, 7.5]

let somaDasNotas1 = 0;

notas1.forEach((nota) => { somaDasNotas1 += nota});

media = somaDasNotas1 / notas.length;
console.log(`A media das notas é: ${media}`)
