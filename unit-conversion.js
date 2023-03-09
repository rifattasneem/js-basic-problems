// const height = 84;

function height(inInches){
   const heightInFeet = inInches / 12;
   return heightInFeet;
}

const heightInInches = 72;
height(heightInInches);
console.log(height(heightInInches));