/**
 * Before executing this file 
 * Run `npm install chalk@2.4.1`
 * and then run `node app.js`
 */

const chalk = require('chalk')

console.log(chalk.green("SUCCESS!"))

console.log(chalk.bold.green("SUCCESS!"))

console.log(chalk.bgGreen("SUCCESS!"))

console.log(chalk.bold.bgGreen("SUCCESS!"))

console.log(chalk.bgGreen.bold.yellow("SUCCESS!"))

console.log(chalk.green.inverse.bold("SUCCESS!"))