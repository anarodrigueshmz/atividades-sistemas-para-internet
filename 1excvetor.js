
function notas(array, quantidade){
for( let pos=0;pos<quantidade; pos++){
array[pos]=Number(prompt("Digite as notas:"));

}
}
const prompt= require("prompt-sync")();

 function calcularMedia(array){
     let soma=0;
     for(const valor of array){
         soma+=valor
     }

   return soma / array.length;
}

function maiorNota(array){
    let maior = array[0];
    for(const nota of array){
        if(nota > maior){
        maior = nota;
        }


    
return maior;
    }
}


let quantidade= Number(prompt("Digite o tamanho da turma:"));
let array=[]
notas(array,quantidade);

console.log(array)

console.log(calcularMedia(array));
 