const max = (...numbers) => {
  let result = -Infinity
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
    return result
  }
}

let numbers = [2, 33, 21, 1, 9, 7]
console.log(max(...numbers));