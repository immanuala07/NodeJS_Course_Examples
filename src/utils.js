const fs = require('fs')
const chalk = require('chalk')

console.log('Accessing - utils.js')

const name = 'Immanual'

const add = (a, b) => {
    return a + b
}

const getNotes = function() {
    return 'your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // });

    // filter function - creates a new array with all elements that pass the test implemented by the provided function.
    // but in the below logic it runs extra even if the match found till the last element in the array.
    // const duplicateNotes = notes.filter((note) => note.title === title)

    // find function - returns the value of the first element in the provided array that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.
    const duplicateNote = notes.find((note) => note.title === title)

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added'))
    } else {
        console.log((chalk.red('Unable to add note: Duplicate note title..!')))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNotes = (title) => {
    const notes = loadNotes();

    // const filteredNotes = notes.filter((note) => {
    //     // if (note.title !== title) {
    //     //     return note;
    //     // }
    //     // (or)
    //     return note.title !== title;
    // })

    const filteredNotes = notes.filter((note) => note.title !== title)
    if (notes.length === filteredNotes.length /* JSON.stringify(filteredNotes) === JSON.stringify(notes) */ ) {
        console.log(chalk.bgRed('No Note Found..!'))
    } else {
        console.log(chalk.bgGreen("Note Removed"))
        saveNotes(filteredNotes)
    }
}

const listNotes = function() {
    console.log(chalk.yellow.bold("Your Notes"))

    const notes = loadNotes();

    notes.forEach(note => {
        console.log(note.title)
    })
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


const readNotes = function(title) {
    const notes = loadNotes();
    const findnote = notes.find(note => note.title == title)
    if (!findnote) {
        console.log(chalk.red.bold("No Note Found"));
        return;
    }
    console.log("Title: ", chalk.bold.yellow(findnote.title))
    console.log("Body: ", chalk.italic.yellow(findnote.body));
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};
