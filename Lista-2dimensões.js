const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

function exibeNomeENota(aluno){
  if (listaDeAlunosEMedias[0].includes(aluno)) {
      // const alunos = listaDeAlunosEMedias[0];
      // const medias = listaDeAlunosEMedias[1];

      const indice = alunos.indexOf(aluno);

      const mediaDoAluno = medias[indice];

      console.log(`${aluno} tem a média ${mediaDoAluno}.`);

  } else {
      console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ana");