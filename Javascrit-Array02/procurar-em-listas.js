const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];


function exibeNomeAluno(aluno) {
    const ListaAlunos = lista[0]
    if (ListaAlunos.includes(aluno)) { // procurar na lista o a variável indicado no ('VAR') e retorna True ou False 
        const indice = lista[0].indexOf(aluno); // Retorna o indice que aquela variável se encontra 
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem média ${mediaAluno}`)
    } else {
        console.log('Estudante não existe na lista')
    }
}

exibeNomeAluno('Caio');
exibeNomeAluno('Guil');
