//** Basic Calculator**
//Create a calculator in JavaScript.
//Prompt the user to enter an operator and two operands.
//Support the following operations: addition, subtraction, multiplication, and division. Output may appear in the console or in an alert.


var firstOperand = prompt("Enter the first operand");
var secondOperand = prompt("Enter the second operand");
var operator = prompt("Enter an operator (+,-,/,*)");

switch(operator) {
  case "+":
    alert( parseInt(firstOperand) +  parseInt(secondOperand) );
  break;
  case "-":
    alert( parseInt(firstOperand) - parseInt(secondOperand) );
    break;
  case "/":
    alert( parseInt(firstOperand) / parseInt(secondOperand) );
    break;
  case "*":
    alert( parseInt(firstOperand) * parseInt(secondOperand) );
    break;
}
