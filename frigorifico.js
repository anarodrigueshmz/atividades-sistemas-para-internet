// Em um frigorífico existem vários bois em seu curral de
// espera. Cada boi traz preso no seu pescoço um cartão
// contendo um número de identificação e seu peso em Kg.
// Implementar um programa que escreva o número e o peso do
// boi mais gordo e do boi mais magro (não é necessário
// armazenar os dados de todos os bois). Calcular e escrever
// também a média de peso dos 19000 bois.
const prompt=require("prompt-sync")();
function calcular(){
let pm=0;
let mp=10000000000000;
let nm=0;
let mn=0;
let  sm=0;
const quantidade=(Number(prompt("Digite a quantidade de bois:")));
for(let i= 1; i<=quantidade;i++){
    const numero= Number(prompt("Digite o número de identificação:"));
    const kg= Number(prompt("Digite o peso em kg:"));
    sm=sm+kg;
    if(kg>pm){
        pm=kg
        nm=numero
    }
    if(kg<mp){
        mp=kg
        mn=numero
    }
}
const media = sm/quantidade;
console.log(`O boi mais pesado tem ${pm}kg e seu id é ${nm}`);
console.log(`O boi mais leve pesa ${mp}kg e seu id é ${mn}`);
console.log(`A media dos pesos é ${media}`)
}
calcular();