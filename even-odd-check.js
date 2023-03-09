function isEven(number){
   if (number % 2 === 0){
      // console.log('The number is even');
      return true;
   }
   else {
      // console.log('The number is odd');
      return false;
   }
}

const myNumber = isEven(309);
console.log(myNumber);