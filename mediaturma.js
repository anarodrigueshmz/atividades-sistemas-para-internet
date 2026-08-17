// Fazer um programa para entrar com nome, nota da Prova1 e
// nota da Prova2 de 15 alunos. Imprimir uma listagem,
// contendo: nome, nota da Prova1, nota da Prova2 e a média
// arredondada de cada aluno. Ao final, calcule e imprima a
// média geral da turma.
const prompt=require("prompt-sync")();
function calcular(){
    let nm="";
    let v=0;
    let quantidade= Number(prompt("Digite a quantidade de alunos:"))
   
for(let i=0;i<quantidade;i++){
const nome= prompt("Digite seu nome:");
nm=nome;
const nota1= Number(prompt("Digite a primeira nota:"));

const nota2= Number(prompt("Digite a segunda nota:"));

const calculo= ((nota1+nota2)/2);

console.log(`${nm} tirou ${nota1} na primeira prova e ${nota2} na seugunda. A média individual é ${calculo.toFixed(1)}`);
v= v+ calculo;
}
const geral= v/quantidade;
console.log(`Media geral da turma:${geral.toFixed(1)}`)


}
calcular();
