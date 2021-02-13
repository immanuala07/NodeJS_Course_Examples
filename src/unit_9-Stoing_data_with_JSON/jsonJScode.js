const fs = require('fs')

const book = {
    title: 'Start from zero',
    author: 'xyz'
}

const JsonString = JSON.stringify(book); // json data converted as string
// console.log(JsonString);

// const JSONParse = JSON.parse(JsonString) // stringified json data is converted as json data
// console.log(JSONParse.author)

fs.writeFileSync('jsonData.json',JsonString)



// The below code reads the file json data and parse it

/**
 * readFileSync function format - fs.readFileSync(path[, options])
 * Returns the contents of the path as buffer (as bits and bytes or binary data).
 */
const dataBuffer = fs.readFileSync('jsonData.json')
console.log("Data Buffer: ", dataBuffer)
const dataJSON = dataBuffer.toString()
console.log('Json Data: ',dataJSON);
const data = JSON.parse(dataJSON)
console.log("Book title: ", data.title)
