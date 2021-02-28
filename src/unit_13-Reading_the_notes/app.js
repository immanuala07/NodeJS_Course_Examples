/**
 * `npm i yargs@12.0.2` before `node app.js`
 * execute this code as `node app.js read --title="Note title 1"`
 */
const yargs = require('yargs')
const notes = require('../utils.js')

// You have to provide the yargs.parse(); or yargs.argv; after defining all the commands.
yargs
    .command({
        command: 'read',
        describe: 'reading the notes',
        builder: {
            //builder object to give hints about the options that your command accepts
            title: {
                describe: 'Note title',
                demandOption: true, // This option is used to say whether title is required command line while executing the prog like
                // demandOption: false - execute the prog as 'node prog.js add'
                // demandOption: true - execute the prog as 'node prog.js add --title'
                type: 'string', // Value for the title option in progam should be the string like
                // execute the prog as 'node prog.js add --title="My title"
            }
        },
        handler: (argv) => {
            notes.readNotes(argv.title)
                // console.log("Title: ", argv.title); // prints the note title provided in the prog comand line args
                // console.log("Body: ", argv.body); // prints the note description provided in the prog comand line args
        }
    }).parse() // Used to parse to fetch the data provided in command args to the prog
