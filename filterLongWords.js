//Hardcode an array of words. Hardocde another variable called maxLength. Set it equal to 5, to start. Push words that are less than the maxLength into a new array, and console.log the new array.

var arrayWords = ["cats", "kibbles", "paws", "whiskers"];
var maxLength = 5;
var newArray = [];

for (var i = 0; i < arrayWords.length; i++) {
  var word = arrayWords[i];

  if(word.length < maxLength) {
    newArray.push(word);
  }

}

console.log(newArray)
