function factorial(number) {
   let result = 1;
   for(let i = 1; i <= number; i++){
      result = result * i;
   }
   return result;
}

const factorialOfNumber = factorial(10);
console.log(factorialOfNumber);