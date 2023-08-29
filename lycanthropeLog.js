'use strict'

const journal = []

const addEntry = (events, squirrel) => {
  journal.push({ events, squirrel })
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false)
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false)
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true)

/**
 * computing correlation
 *ϕ =	n11n00 − n10n01 / √ n1•n0•n•1n•0
 */
const phi = (table) => {
  return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

// Extract the events from the journal array
const extract = (event, journal) => {
  const table = [0, 0, 0, 0]
  for (let i = 0; i < journal.length; i++) {
    const entry = journal[i]; let index = 0
    if (entry.events.includes(event)) index++
    if (entry.squirrel) index += 2
    table[index]++
  }
  return table
}

console.log(extract('pizza', journal))
