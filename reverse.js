//Write a program that will take a hardcoded string, and console log the reversed version of it. Use a for loop.




var reversedString = "";
var theString = "jasper";
var counter = theString.length;

for (counter  ; counter > 0 ; counter -- ) {
  reversedString += theString.substring(counter-1, counter);
}

// reversedString += theString.substring((6-1),6)
// reversedString += theString.substring((5-1),5)
// reversedString += theString.substring((4-1),4)
// reversedString += theString.substring((3-1),3)
// reversedString += theString.substring((2-1),2)
// reversedString += theString.substring((1-1),1)

// reversedString += theString.substring(5,6)
// reversedString += theString.substring(4,5)
// reversedString += theString.substring(3,4)
// reversedString += theString.substring(2,3)
// reversedString += theString.substring(1,2)
// reversedString += theString.substring(0,1)


console.log(theString + " reversed is " + reversedString + "!");
