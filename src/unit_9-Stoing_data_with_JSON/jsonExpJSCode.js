const fs = require('fs')

/**
 * readFileSync function format - fs.readFileSync(path[, options])
 * Returns the contents of the path as buffer (as bits and bytes or binary data).
 */
const dataBuffer = fs.readFileSync('jsonExpData.json')
const dataJSON = dataBuffer.toString()
console.log('Original Json Data: ', dataJSON);
const data = JSON.parse(dataJSON)

// change the name & age property uing the json info
data.name = 'Jon';
data.age = 25;

// Stringify the json 
const jsonString = JSON.stringify(data)
console.log('Changed Json Data: ', jsonString)

// overwite the originial data
fs.writeFileSync('jsonExpData.json',jsonString);