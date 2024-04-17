// Q1 *String Length Calculation*:
// Write a program to calculate the length of a given string.

var str = "Hello World"
let length = 0;

for (i=0; i<=str.length; i++) {
 
    length++;

}
console.log(str)
console.log(length)


// Q2  *String to Uppercase*:
// Convert a string to uppercase.

var word = "my name is muhammad issa"
var words = word.toUpperCase()

console.log(word);
console.log(words)


// Q3 *String to Lowercase*:
// Convert a string to lowercase.
var string = "HELLO WELCOME TO SMIT"
var newString = string.toLowerCase();

console.log(string);
console.log(newString);


// Q4 *Count Specific Character*
// Count the occurrences of a specific character within a string.

// var char = prompt("enter any characters to count the occurence")
// var charToCheck = prompt("enter any char to check ")
// count = 0;

// for(i=0 ; i<= char.length; i++) {
    
//     if(char[i] === charToCheck) {
//             count++;
//     }

// }

// console.log(char)
// console.log(count);


// Q5 *Substring Extraction*:
// Write a program that extracts a substring from a given string using a start and end index provided by the user.

// var stringSub = prompt("enter any string?")
// var startIndex = prompt("enter Start index string")
// var endIndex = prompt("enter the end index of the string")

// let results = "";
// for (let i = startIndex; i < endIndex; i++) {
//   results += str[i]
// }

// console.log(results);

//  Q6 *Capitalize Each Word*:
// Write a program to capitalize the first letter of each word in a given string.

const cap = "hello world! ";
let result = "";

for (let i = 0; i < cap.length; i++) {
  if (i === 0 || cap[i - 1] === " ") {
    result += cap[i].toUpperCase();
  } else {
    result += cap[i];
  }
}

console.log(result);


// Q7 *Trim Whitespace*
// Remove leading and trailing whitespaces from a string

var wordToTrim = "  My name is Muhammad Issa    "
var trims = wordToTrim.trim()

console.log(wordToTrim)
console.log(trims);

// Q8  *Count Vowels and Consonants*:
// Count the number of vowels and consonants in a given string.

const wordToCheckForVowel = "The quick brown fox jumps over the lazy dog.";

let vowels = 0;
let consonants = 0;

for (let i = 0; i < wordToCheckForVowel.length; i++) {
  const char = wordToCheckForVowel[i];

  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
  } else if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
    consonants++;
  }
}

console.log(`Number of vowels: ${vowels}`);
console.log(`Number of consonants: ${consonants}`);

// Q9 *Substring Extraction with Index*:
// Extract a substring from a given string starting from a specified index up to the end of the string.

const subStringWord = "Hello, World!";
const startIndex = prompt("enter index for substring");

let substring = "";

for (let i = startIndex; i < subStringWord.length; i++) {
  substring += subStringWord[i];
}

console.log(substring);


// Q10 *Remove Duplicates*:
// Remove duplicate characters from a string.

const wordToRemove = "hellwoowsdsdsowwaaaaskdnSMITTTT";

let uniqueStr = "";

for (let i = 0; i < wordToRemove.length; i++) {
  if (uniqueStr.indexOf(wordToRemove[i]) === -1) {
    uniqueStr += wordToRemove[i];
  }
}

console.log(wordToRemove)
console.log(uniqueStr); 

// Q11 *Word Count in String*:
// Count the number of words in a given string.

var countWords = "Saylani mass it training has more than 5 courses"
var wordCount = 0;

for (i= 0; i<=countWords.length ; i++) {

    if (countWords[i] === " " && countWords[i - 1] !== " ") {
        wordCount++;
      }

}

if (countWords[0] !== " ") {
    wordCount++;
  }

console.log(wordCount)

// Q12 *Remove All Instances*:
// Remove all occurrences of a specified substring from a string.

const substringSub = "The quick brown fox jumps over the lazy dog.";
const substringToRemove = "the";

let newStr = "";

for (let i = 0; i < substringSub.length; i++) {
  if (substringSub.substring(i, i + substringToRemove.length) !== substringToRemove) {
    newStr += substringSub[i];
  }
}

console.log(newStr); 



