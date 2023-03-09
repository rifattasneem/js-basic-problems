function maxInArray(numbers){
   let largest = numbers[0];
   for(let i = 0; i < numbers.length; i++){
      const element = numbers[i];
      if(element > largest){
         largest = element;
      }
   }
   return largest;
}

const arrNumbers = [123, 464, 3938, 833, 28];
const maxNumber = maxInArray(arrNumbers);
console.log(maxNumber);