/**
 * Run `npm install -g nodemon@1.18.5`
 * So the nodemon will be installed globally to your system path.
 * 
 * Nodemon is a tool that helps develop node.js based applications by automatically restarting
 * the node application when file changes in the directory are detected.
 * 
 * now run the app.js as `nodemon app.js` instead of `node app.js`
 */ 

const chalk = require('chalk')

console.log(chalk.green("SUCCESS!"))

console.log(chalk.bold.green("SUCCESS!"))

console.log(chalk.bgGreen("SUCCESS!"))

console.log(chalk.bold.bgGreen("SUCCESS!"))

console.log(chalk.bgGreen.bold.yellow("SUCCESS!"))

console.log(chalk.green.inverse.bold("SUCCESS!"))

console.log(chalk.blue.inverse.bold("SUCCESS!"))

console.log(chalk.red.inverse.bold("SUCCESS!"))