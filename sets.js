const array = [1, 2, 3, 4, 5]
const set = new Set(array)

console.log('Adding elements to a set');
console.log(set);
set.add(['chu', 'vicky', 'paula'])
console.log(set);

console.log('Deleting elements in a set');
set.delete(3)
console.log(set);

console.log('Clearing a set');
set.clear()
console.log(set);