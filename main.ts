import inquirer from "inquirer";

let myBalance = 50000; // Dollar
let myPin = 335642;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin == myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select operation",
      type: "list",
      choices: ["Withdraw", "Check balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let askOption = await inquirer.prompt([
      {
        name: "Option",
        message: "Please select an option",
        type: "list",
        choices: ["Fast choices", "Write amount"],
      },
    ]);
    if (askOption.Option === "Fast choices") {
      let amountAns1 = await inquirer.prompt([
        {
          name: "Amount",
          message: "How much amount you want to withdraw?",
          type: "list",
          choices: ["10000", "20000", "30000"],
        },
      ]);
      myBalance -= amountAns1.Amount;
      console.log(`Your current balance is ${myBalance}`);
    } else if (askOption.Option === "Write amount") {
      let amountAns2 = await inquirer.prompt([
        {
          name: "Amount",
          message: "Enter your amount",
        },
      ]);

      if (amountAns2.Amount >= myBalance) {
        console.log("Request cancelled! Insufficient balance");
      } else if ((myBalance -= amountAns2.Amount)) {
        console.log(`Your current balance is  ${myBalance}`);
      }
    } 
  }
    else if (operationAns.operation == "Check balance") {
      console.log(`Your balance is ${myBalance}`);
    }
  
} else {
  console.log("Incorrect pin number");
};
