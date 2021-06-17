// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure){
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints = letterPoints += (Number(pointValue))
		 }
	  }
	}console.log(`Points for ${word}: ${letterPoints}`);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   firstWord= input.question("Let's play some scrabble! Enter a word to score:");
   return firstWord;
};

let newPointStructure={}

function transform(obj) {
 for (numericValue in obj){
  for (let letterValue of obj[numericValue]){
    newPointStructure[letterValue.toLowerCase()]=numericValue
    }
  }
  return newPointStructure
}
 
function simpleScorer(word) {
  word = word.toUpperCase();
  let firstWord="";
  firstWord += `Points for '${word}' : ${word.length*1}\n`
  return firstWord;
}


function vowelBonusScorer(word){
  let vowels = ['A','E','I','O','U','Y']
  word = word.toUpperCase();
  let firstWord=0;
  for (let i=0; i<word.length; i++){
    if (vowels.includes(word[i])){
      firstWord +=3;
    }
    else{
      firstWord++
    }
   }
  console.log(`Points for ${word} : ${firstWord}`);
  return firstWord;
}

function scrabbleScorer(word, newPointStructure){
  word= word.toLowerCase();
  let firstWord=0;
  for (let letter of word){
    firstWord += Number(newPointStructure[letter])
  }
  console.log(`Points for ${word} : ${firstWord}`);
  return firstWord;
}

let simpleScore = {
  'name': 'Simple Score',
  'description': 'Each letter is worth 1 point.',
  'scorerFunction': simpleScorer
}

let vowelBonusScore = {
  'name': 'Bonus Vowels',
  'description': 'Vowels are 3 pts, consonants are 1 pt.',
  'scorerFunction': vowelBonusScorer
}

let scrabbleScore = {
  'name': 'Scrabble',
  'description': 'The traditional scoring algorithm.',
  'scorerFunction': scrabbleScorer
}

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt(word) {
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let scorerChoice = input.question("Enter 0, 1, or 2:");
  console.log(scoringAlgorithms[scorerChoice].scorerFunction(word, newPointStructure))
  return scorerChoice
}

function runProgram() {
   let promptWord = initialPrompt();
   transform(oldPointStructure);
   let promptChoice = scorerPrompt(promptWord);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	 runProgram: runProgram,
	 scorerPrompt: scorerPrompt
  }