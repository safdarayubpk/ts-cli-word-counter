#!/usr/bin/env node
// Import necessary modules
import inquirer from "inquirer";
import chalk from "chalk";
// ASCII art for "Word Counter"
console.log(chalk.bold.yellowBright(`
                        .___                            __                
__  _  _____________  __| _/   ____  ____  __ __  _____/  |_  ___________ 
\\ \\/ \\/ /  _ \\_  __ \\/ __ |  _/ ___\\/  _ \\|  |  \\/    \\   __\\/ __ \\_  __ \\
 \\     (  <_> )  | \\/ /_/ |  \\  \\__(  <_> )  |  /   |  \\  | \\  ___/|  | \\/
  \\/\\_/ \\____/|__|  \\____ |   \\___  >____/|____/|___|  /__|  \\___  >__|   
                         \\/       \\/                 \\/          \\/       
`));
console.log("\n");
// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter a sentence:",
        type: "input",
    },
]);
// Split the entered sentence into words
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
// Print the words in the sentence
console.log(chalk.bold.cyanBright("Sentence words"));
console.log(words);
// Print the count of words in the sentence
console.log(chalk.bold(`\nSentence words count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
