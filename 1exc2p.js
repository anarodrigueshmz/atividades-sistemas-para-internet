function calcular(){
const prompt= require("prompt-sync")();
let quantidade= 3;
let contador= 0;
let guardaM ="";
let Nguarda=11;
let gn= "";
let ng="";

for(let i= 1; i<=quantidade; i++){
const nome= prompt("digite seu nome:");
const mediaind= Number(prompt("Digite sua media:"));

contador=contador+mediaind;
if(mediaind>guardaM){
   guardaM=mediaind;
   gn=nome;
  
}

if(mediaind<Nguarda){
    Nguarda=mediaind;
    ng=nome;

}
}
let mediaj = contador/quantidade;
let media= Math.trunc(mediaj);
console.log(`${gn} tirou ${guardaM} obtendo a maior nota da turma `);
console.log(`${ng} tirou ${Nguarda} obtendo a menor nota da turma`);
console.log(`Media Geral= ${media}`);
let sera="";
for(let i= 1; i<=quantidade; i++){
const nome= prompt("digite seu nome:");
const mediaind= Number(prompt("Digite sua media:"));
    if(mediaind>=media){
   sera= "Sua media está acima da media geral"
    }else if(mediaind<media){
        sera="Sua media está abaixo da media geral"
    }
    console.log(`${sera}`);
}
}
calcular();

