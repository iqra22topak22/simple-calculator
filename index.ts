import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstNumber" },
  { message: "enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPECTION", "DIVISION"],
  },
]);
//condittion statement
if (answer.operator === "ADDITION") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION"){
  console.log(answer.firstNumber - answer.secondNumber) ;
} else if (answer.operator === "MULTIPECTION"){
  console.log(answer.firstNumber * answer.secondNumber) ;
} else if (answer.operator === "DIVISION"){
  console.log(answer.firstNumber / answer.secondNumber) ;
} 
else{"please select correct operator"};



