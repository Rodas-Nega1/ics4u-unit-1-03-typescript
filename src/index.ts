/**
 * This program is based on the Rock-Paper-Scissors game
 *     with a computer opponent.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from 'prompt-sync'

// The program will halt with a response at improper user inputs
const prompt = promptSync()
const soup = 105
const sub = 60
const pizza = 45
const percentTwo = 1.5
const percentThree = 2
let totalTime = 0
let minutes = 0
let seconds = 0

// input
const userInput = prompt(
  'What lunch do you want to heat (sub, pizza, or soup): '
)
const userInput2 = prompt('How many of this lunch item do you want to heat?: ')
const itemNumber = parseFloat(userInput2)
// process & output
if (userInput === 'soup' || userInput === 'sub' || userInput === 'pizza') {
  if (userInput === 'soup') {
    totalTime = soup
  } else if (userInput === 'pizza') {
    totalTime = pizza
  } else if (userInput === 'sub') {
    totalTime = sub
  }

  if (itemNumber === 1 || itemNumber === 2 || itemNumber === 3) {
    if (itemNumber === 2) {
      totalTime = totalTime * percentTwo
    } else if (itemNumber === 3) {
      totalTime = totalTime * percentThree
    }
    seconds = totalTime / 60
    minutes = Math.floor(seconds)
    seconds = (seconds - minutes) * 60
    console.log(
      `\nthe total time elapsed will be: ${minutes} minutes and ${seconds} seconds.`
    )
  } else {
    console.log('That is an invalid.')
  }
} else {
  console.log('That is an invalid input.')
}
console.log('\nDone.')
