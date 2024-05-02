#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("welcome to ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your  pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code", "login sucessfully!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select the option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount to withdraw",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`${amountAns.amount} withdraw sucessfully`);
        }
        console.log("your remaning balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your current balance is:" + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the fastcash amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fastcashAns.fastcash;
        console.log(`"you withdraw" ${fastcashAns.fastcash} "sucessfully" `);
        console.log(`your remaning balance is " ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number!", "please try again");
}
