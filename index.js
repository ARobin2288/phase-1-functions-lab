

function distanceFromHqInBlocks(someValue){
    if (someValue > 42) {
        return someValue - 42;    
    } 
    return 42 - someValue;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50)

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
  }

distanceFromHqInFeet(50);

  function distanceTravelledInFeet(start, destination) { 
      if (start > destination) {
        return (start - destination) * 264; 
      } else {
          return (destination - start) * 264;
      }
      }


  function calculatesFarePrice(start, destination) {
      if ((Math.abs(start - destination) * 264) < 400) {
         return 0;
     } else if ((Math.abs(start - destination) * 264) < 2000) {
         return (((Math.abs(start - destination) * 264) - 400) * .02);
     } else if (2000 <= ((Math.abs(start - destination) * 264)) && (Math.abs(start - destination) * 264) < 2500)
         return 25;
         else ((Math.abs(start - destination) * 264) > 2500)
            return "cannot travel that far";
       }