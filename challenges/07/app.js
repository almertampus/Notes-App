const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yarg version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note\'s title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes\'s body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//
// Challenge 7: Setup command option and function
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note\'s title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Opening a note!')
    }
})

yargs.parse()