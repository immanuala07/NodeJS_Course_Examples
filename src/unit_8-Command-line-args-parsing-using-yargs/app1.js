/**
 * `npm i yargs@12.0.2` before `node app.js` 
 */

const yargs = require('yargs')

//You have to provide the yargs.parse(); or yargs.argv; after defining all the commands.
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding the note')
    }
}).argv;

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
}).parse();

yargs.command({
    command: 'list',
    describe: 'listing the note',
    handler: function () {
        console.log('Listing the note')
    }
}).argv;

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
}).parse();

console.log(process.argv)