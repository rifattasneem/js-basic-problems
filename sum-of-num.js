function sumOfNum(numArr){

   let sum = 0;
   for(let i = 0; i < numArr.length; i++){
      const number = numArr[i];
      sum = sum + number;
      console.log(sum);
   }
   return sum;
}

const numArrFinal = [13, 24, 53, 74, 50];
sumOfNum(numArrFinal);
