function notas(array,posição){
for( let i=0;i<posição; i++){

array[i]= Math.floor(Math.random()*1001);

}
}
const prompt= require("prompt-sync")();
let array= []; 
let posição=Number(prompt("Digite quantas posições:"));

notas(array,posição);
console.log(`Vetor|${array}`);
console.log(posição);