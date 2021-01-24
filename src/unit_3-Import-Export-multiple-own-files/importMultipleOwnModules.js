const modules = require('./utils.js')

const name = modules.name;
const add = modules.add;
const getNotes = modules.getNotes;

console.log(name)

const sum = add(6,-2)
console.log(sum)

const msg = getNotes()
console.log(msg)