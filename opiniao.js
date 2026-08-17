// No dia da estréia do filme "Senhor dos Anéis” uma grande
// emissora de TV realizou uma pesquisa logo após o
// encerramento do filme. Cada espectador respondeu a um
// questionário no qual constava sua idade e a sua opinião em
// relação ao filme: excelente - 3; bom - 2; regular - 1. Criar um
// algoritmo que receba a idade e a opinião de 20 espectadores,
// calcule e imprima:
// ● a média das idades das pessoas que responderam
// excelente;
// ● a quantidade de pessoas que responderam regular;
// ● a percentagem de pessoas que responderam bom entre
// todos os espectadores analisados.
const prompt=require("prompt-sync")();
function calcular(){
const quantidade= Number(prompt("Digite a quantidade de espectadores:"));
let id= 0;
let ld=0;
let rg=0;
let ai=0;

for(let i=1;i<=quantidade;i++){

    const idade= Number(prompt("Digite a sua idade:"));
    const opiniao= Number(prompt("Qual sua opinião sobre o filme? Escolha uma dessas opções:excelente - 3; bom - 2; regular - 1:"));

    if(opiniao===3){
        id=id+idade
        ld++
    }
     if(opiniao===1){
        rg++
    }else if(opiniao===2) 
    ai++

}
const media= id/ld;
const ms=(ai/quantidade)*100
console.log(`Media excelente:${media}`);
console.log(`Quantidade regular:${rg}`);
console.log(`Quantidade bom:${ms}`);


}
calcular();