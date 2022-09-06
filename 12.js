/*
    How to run:
    Please run -
    npm install figlet
    npm install prompt-sync
    then run this code with node
*/

const figlet = require('figlet');
const prompt = require('prompt-sync')();

const ALLOWED_ERRORS = 10

const getUserInput = () => prompt('Please enter a letter: ')
const getRandomWord = (words) => words[Math.floor(Math.random() * words.length)];
const getAllWords = () => ['apple', 'doG', 'tunnle', 'computer', 'pizza', 'bread', 'melon', 'vacation'] 

// runs a full game
const runGame = ()=> {
   printMessage('HANG MAN!')
   let words = getAllWords()
   let word = getRandomWord(words).toLowerCase()
   console.log(`You have ${ALLOWED_ERRORS} guesses`)
   let errors=0;
   let correctPositions = new Set()
   printWord(word, correctPositions)
   while(errors < ALLOWED_ERRORS && correctPositions.size < word.length){
       let currLetter = getUserInput()
       while (!IsValid(currLetter)) {
           console.log("Invalid char. Please enter a letter")
           currLetter = getUserInput()
       }

       let newPositions = getCharIndexes(currLetter, word)
       if (newPositions.length == 0) {
           console.log('Wrong answer')
           errors++            
       } 
       else { // Good guess           
           newPositions.forEach(p => correctPositions.add(p))     
       } 
       printWord(word, correctPositions)
   }
   if (errors == ALLOWED_ERRORS) {
       // Handle failure
       console.log("You ran out of attempts.. try again next time")
   } else {
       // Handle success
       printMessage('Good Job!')
   }
}

const IsValid=(str)=>{
   return str.length === 1 && str.match(/[a-z]/i);
}

// Gets a word and indexes of revealed chars, and returns the word with correct format
const printWord = (word, index_arr)=>{    
  let encripted = Array.from('*'.repeat(word.length))   
  for(let position of index_arr){    
     encripted[position] = word[position]
  }
  console.log(encripted.join(""))
}

// Gets a char and a word and returns the indexes of the char in the word
const getCharIndexes = (c, word) => {
  let indexes = []
  for (let i in word) {
     if (c.toLowerCase() == word[i]) {
        indexes.push(i)
     }
  }
  return indexes
}

const printMessage = (text) => {
    console.log(figlet.textSync(text));
}

runGame()
