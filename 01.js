// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

var numbers = [ 13, 2 , 8, 28 , 3 ];

var largestNumber = numbers[0];

for(var i=0; i<numbers.length; i++)
{
  // test_number = 3;
  var test_number = numbers[i];

  // if 3 > 22
  if(test_number > largestNumber)
  {
    largestNumber = test_number;
  }

}

alert("The largest number is " + largestNumber)
