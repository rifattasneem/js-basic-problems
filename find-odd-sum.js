function getOdd(numArr){
   const oddNumberArray = [];
   for(let i = 0; i < numArr.length; i++){
      const element = numArr[i];

      if(element % 2 != 0){
         oddNumberArray.push(element);
      }
   }
   return oddNumberArray;
}

function sumOfNum(numArr){
   let sum = 0;
   for(let i = 0; i < numArr.length; i++){
      const number = numArr[i];
      sum = sum + number;
   }
   return sum;
}

const numArrOrg = [13, 24, 53, 74, 50];
const finalArray = getOdd(numArrOrg);
console.log(finalArray);

const sum = sumOfNum(finalArray);
console.log(sum);
