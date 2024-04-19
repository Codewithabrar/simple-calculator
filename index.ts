#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { messege: "Enter first number", type: "number", name: "firstNumber" },
  { messege: "Enter second number", type: "number", name: "secondNumber" },
  {
    messege: "Select one of the operator to perform operation.",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);
 //conditional statement

 if (answer.operator === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
 }else if (answer.operator === "Subtraction") {
    console.log( answer.firstNumber - answer.secondNumber);
 }else if (answer.operator === "Multiplication") {
   console.log(answer.firstNumber * answer.secondNumber);
 }else if (answer.operator === "Division") {
   console.log(answer.firstNumber / answer.secondNumber);
 }else{
   console.log("Please select your valid operator");
 }

