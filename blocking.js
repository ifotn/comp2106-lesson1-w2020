// include node's filesystem library to read the text files
const fs = require('fs')

// read & display the food list
var food = fs.readFileSync('food.txt', 'utf8')
console.log(food)
console.log('Hello food')

// read & display the drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('Hello drinks')
