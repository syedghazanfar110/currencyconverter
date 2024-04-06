#! /usr/bin/env node
import inquirer from "inquirer";

let currency: any = {
    USD: 1,
    EUR: 0.9,
    IND: 75,
    PKR: 200,
}
let user_answer = await inquirer.prompt([{
    name: "from",
    message:"Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "IND","PKR"]
},
{
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "IND", "PKR"]
},
{
    name: "amount",
    message: "Enter amount",
    type: "number",

},

])
let amount = user_answer.amount;
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let totalAmount = amount / fromAmount;
let total = totalAmount * toAmount;
console.log(total);