/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
*/
 

let oneNumber = prompt("Digite o primeiro número ")
let twoNumber = prompt("Digite o segundo número ")
alert (" A soma dos dois números; " + (Number(oneNumber) + Number(twoNumber)) )
alert(" A subtração dos dois números; " + (Number(oneNumber) - Number(twoNumber)))
alert(" A multiplicação dos dois números; " + (Number(oneNumber) * Number(twoNumber)))
alert(" A divisão dos dois números; " + (Number(oneNumber) / Number(twoNumber)))
alert("O resto da divisão dos dois números; " + (Number(oneNumber) % Number(twoNumber)))


let result =  (Number(oneNumber) + Number(twoNumber)) % 2 == 0;


if(result) {
    alert("A soma dos números é par")

} else {
    alert("A soma dos números é impar")
}

let resultEqual = oneNumber == twoNumber

if(resultEqual) {
    alert("Os dois números é igual")

} else {
    alert("Os dois números é diferente")
}




 
