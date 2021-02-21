const fs = require('fs')
const chalk = require('chalk')

console.log('Accessing - utils.js')

const name = 'Immanual'

const add = function(a, b) {
    return a + b
}

const getNotes = function() {
    return 'your notes...'
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added'))
    } else {
        console.log((chalk.bgGreen('Unable to add note: Duplicate note title..!')))

    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNotes = function(title) {
    const notes = loadNotes()
    const filteredNotes = notes.filter(function(note) {
        // if (note.title !== title) {
        //     return note;
        // }
        // (or)
        return note.title !== title;
    })
    if (notes.length === filteredNotes.length /* JSON.stringify(filteredNotes) === JSON.stringify(notes) */ ) {
        console.log(chalk.bgRed('No Note Found..!'))
    } else {
        console.log(chalk.bgGreen("Note Removed"))
        saveNotes(filteredNotes)
    }
}


const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}
