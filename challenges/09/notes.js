const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

// add note function
const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else (
        console.log(chalk.red('Note title taken!'))
    )
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// remove note function
const removeNote = function(title) {
    const notes = loadNotes()
    const filteredNote = notes.filter(function (note) {
        return note.title !== title
    })
    const matchNote = notes.filter(function (note) {
        return note.title === title
    })

    if (matchNote.length > 0) {
        saveNotes(filteredNote)
        console.log(chalk.green.inverse('Note removed.'))
    } else {
        console.log(chalk.red.inverse('No note found.'))
    }
 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}