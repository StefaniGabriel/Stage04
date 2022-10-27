/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista,
 deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se**
 cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/



const students = [
    {
        name: "Lucas",
        prova1: 8,
        prova2: 9, 
    },
    {
        name: "Alicia",
        prova1: 5,
        prova2: 4, 
    
    },
    {
        name: "Bianca",
        prova1: 9,
        prova2: 6,
    },
    {
        name: "Thays",
        prova1: 5,
        prova2: 4,
    },
    {
        name: "Abraão",
        prova1: 10,
        prova2: 9,
    },
]

let studentsNames = []

function resultTest (student) {

    for(let student of students) {
        studentsNames.push(student.name)

        let result = (student.prova1 + student.prova2) / 2
     
     {if(result > 7) {
         alert(`${student.name} sua média foi de  ${result}.
        Parabéns!!! ${student.name} você passou no concurso. `)
     } else {
         alert(`${student.name} sua média foi de  ${result}.
         Não foi dessa vez ${student.name} , tente novamente`)

     }}}
     
    
    

}

resultTest()




