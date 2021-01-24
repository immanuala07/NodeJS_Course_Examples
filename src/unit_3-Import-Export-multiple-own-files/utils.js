console.log('You are using functions and variable from - utils.js')

const name = 'Immanual'

const add = function(a, b) {
    return a+b
} 

const getNotes = function() {
    return 'your notes...'
}

module.exports = {
    name,
    add,
    getNotes
}