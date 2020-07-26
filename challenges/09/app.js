const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Challenge 9: Use chalk to provide useful logs to remove
//
// 1. If a note is removed, print the "Note removed" with a green background
// 2. If not note is removed, print "No note found" with a red background


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