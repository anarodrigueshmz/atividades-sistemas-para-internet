const array = [1,2,3,4,5,6,7,8,9,10];
let str3 = "Array = |";
let pos3 =0;
do{str3+=array[pos3]+"|";
    pos3++;
}while(pos3<array.lenght);
  console.log(str3);