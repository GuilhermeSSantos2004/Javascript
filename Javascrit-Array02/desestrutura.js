const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];


function exibeNomeAluno(aluno) {
    
    if (lista[0].includes(aluno)) { // procurar na lista o a variável indicado no ('VAR') e retorna True ou False 
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno); // Retorna o indice que aquela variável se encontra 
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem média ${mediaAluno}`)
    } else {
        console.log('Estudante não existe na lista')
    }
}

exibeNomeAluno('Caio');
exibeNomeAluno('Guil');
