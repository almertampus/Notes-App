const fs = require("fs")

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
}

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// Challenge 6: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the change object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

// Original JSON file {"name":"Andrew","planet":"Earth","age":27}

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Almer"
user.age = "23"

const newValue = JSON.stringify(user)
fs.writeFileSync("1-json.json", newValue)

console.log(user.name)
console.log(user.age)
