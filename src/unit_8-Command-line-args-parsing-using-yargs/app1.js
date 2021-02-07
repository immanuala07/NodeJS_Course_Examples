/**
 * `npm i yargs@12.0.2` before `node app.js`
 */

const yargs = require("yargs");

//You have to provide the yargs.parse(); or yargs.argv; after defining all the commands.
yargs.command({
  command: "add",
    describe: "Add a new note",
    builder: { //builder object to give hints about the options that your command accepts
        title: {
            describe: "Note title",
            demandOption: true, // This option is used to say whether title is required command line while executing the prog like 
            // demandOption: false - execute the prog as 'node prog.js add'
            // demandOption: true - execute the prog as 'node prog.js add --title'
            type: 'string' // Value for the title option in progam should be the string like
            // execute the prog as 'node prog.js add --title="My title"
        },
        body: {
            describe: 'Note body',
            demandOption: true, // default value will be false
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title: ", argv.title); // prints the note title provided in the prog comand line args
        console.log("Body: ", argv.body); // prints the note description provided in the prog comand line args
    },
}).parse(); // Used to parse to fetch the data provided in command args to the prog

// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function () {
//         console.log('Removing the note')
//     }
// }).parse();

// yargs.command({
//     command: 'list',
//     describe: 'listing the note',
//     handler: function () {
//         console.log('Listing the note')
//     }
// }).argv;

// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading the note')
//     }
// }).parse();

// console.log(process.argv);
// or use
// yargs.parse()
