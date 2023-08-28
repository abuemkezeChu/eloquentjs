'use strict'

// methods

const doh = 'DOH'
console.log(typeof doh.toUpperCase)
console.log(doh.toUpperCase())

// objects

// creating an object
const day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running'],
  'touched tree': 'Touched Tree',
  age: 20
}

// playing with methods and properties available on objects
const anObject = {
  left: 1,
  right: 2,
  center: 0.5
}

console.log(anObject.left)
delete anObject.left
console.log(anObject)
console.log('left' in anObject)

console.log(Object.keys(anObject))
