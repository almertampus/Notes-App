const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Goal: Wire up read command
//
// 1. Setup title option for read command
// 2. Create readNote in note.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No found note? Print error in red
// 3. Have command handler call the function
// 4. Test your work by running a couple of commands

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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe:'Note\'s title',
            demandOption: true,
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()