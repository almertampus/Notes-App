const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yarg version
yargs.version('1.1.0')


//
// Challenge 5: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required and for it to be string
// 3. Log the body value in the handler function
// 4. Test you work!


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
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
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