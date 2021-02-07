/**
 * `npm i yargs@12.0.2` before `node app.js` 
 */

// execute the prog as 'node prog.js add june --title = 'Hi hello''

const chalk = require('chalk')
const yargs = require('yargs')

console.log('process argv')
console.log(process.argv)

console.log('\n')

console.log('yargs argv')
console.log(yargs.argv)
