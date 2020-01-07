// link to node's filesystem library
const fs = require('fs')

// read & display food list
var food = fs.readFile('food.txt', 'utf8', (err, food) => {
    setTimeout(() => {
        console.log(food)
    }, 5000)
    //console.log(food)
})

console.log('Hello food')

// read & display drinks list
var drinks = fs.readFile('drinks.txt', 'utf8', (err, drinks) => {
    console.log(drinks)
})

console.log('Hello drinks')
