/**
 * `npm i yargs@12.0.2` before `node app.js`
 * execute this code as `node app.js list`
 */
const yargs = require('yargs')
const notes = require('../utils.js')

// You have to provide the yargs.parse(); or yargs.argv; after defining all the commands.
yargs
    .command({
        command: 'list',
        describe: 'Listing the notes',
        handler: () => {
            notes.listNotes()
                // console.log("Title: ", argv.title); // prints the note title provided in the prog comand line args
                // console.log("Body: ", argv.body); // prints the note description provided in the prog comand line args
        }
    }).parse() // Used to parse to fetch the data provided in command args to the prog
