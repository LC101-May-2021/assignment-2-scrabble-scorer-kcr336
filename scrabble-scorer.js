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

const vowelPointStructure = {
  1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z'],
  3: ['A','E','I','O','U','Y']
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

function simpleScorer(word) {
  word = word.toUpperCase();
  let firstWord="";
  firstWord += `Points for '${word}' : ${word.length*1}\n`
  return firstWord;
}


function vowelBonusScorer(word){
  word = word.toUpperCase();
  let firstWord=0;
  for (let i=0; i<word.length; i++){
    for(const pointValue in vowelPointStructure){
      if(vowelPointStructure[pointValue].includes(word[i])){
        firstWord = firstWord += (Number(pointValue))
     }
   }
  }console.log(`Points for ${word} : ${firstWord}`);
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
  'scorerFunction': oldScrabbleScorer
}

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt(word) {
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let scorerChoice = input.question("Enter 0, 1, or 2:");
  console.log(scoringAlgorithms[scorerChoice].scorerFunction(word))
  return scorerChoice
}

function transform() {}

const newPointStructure= {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
}

function runProgram() {
   let promptWord = initialPrompt();
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