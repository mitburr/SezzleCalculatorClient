import React from "react";

// The Math function component accepts 3 arguments
function Math(num1, num2, operator) {
  let value;

  // Assign value based on the operator
  switch (operator) {
  case "+":
    value = num1 + num2;
    break;
  case "-":
    value = num1 - num2;
    break;
  case "*":
    value = num1 * num2;
    break;
  case "÷":
    value = num1 / num2;
    break;
  default:
    value = NaN;
  }

  //returns a string of the equation including the answer
  return `${num1} ${operator} ${num2} = ${value} `;
}

export default Math;
