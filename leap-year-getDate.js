function leapYear(year){
   if(new Date(year, 1, 29).getDate() === 29){
      return true;
   }
   return false;
}

const getDateLeapYear = leapYear(2000);
console.log(getDateLeapYear);
