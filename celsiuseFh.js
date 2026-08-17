// Criar um programa que imprima a tabela de conversão de
// graus Celsius e Fahrenheit para o intervalo desejado pelo
// usuário. O algoritmo deve solicitar ao usuário o limite superior,
// o limite inferior do intervalo e o decremento. Fórmula de
// conversão: C =5 (F - 32) / 9.
const prompt=require("prompt-sync")();
//console.log(TABELA)
function calcular(){

const superior= Number(prompt("Digite o limite superior:"));
const inferior= Number(prompt("Digite o limite inferior:"));
const decremento= Number(prompt("Digite o decremento:"));
for(let i=superior;i>=inferior;i=i-decremento){

const c =(((5*(i - 32)) / 9)).toFixed(0);
console.log(`Celsius | Fahrenheit`)
console.log(`${c}C    |    ${i}F`);
}
}
calcular();