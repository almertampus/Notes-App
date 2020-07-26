const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

// add note function
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else (
        console.log(chalk.red.inverse('Note title taken!'))
    )
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// remove note function
const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNote = notes.filter((note) => note.title !== title)
    const matchNote = notes.filter((note) => note.title === title)

    if (matchNote.length > 0) {
        saveNotes(filteredNote)
        console.log(chalk.green.inverse('Note removed.'))
    } else {
        console.log(chalk.red.inverse('No note found.'))
    }
 }

 // list note function
 const listNotes = () => {
     const notes = loadNotes()

     console.log(chalk.magenta.inverse('Your notes..'))

     notes.forEach(note => {
         console.log(note.title)
     });
 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}