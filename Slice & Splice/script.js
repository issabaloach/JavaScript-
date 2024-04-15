// Q1
// Given the array numbers = [1, 2, 3, 4, 5], use the splice method to remove the second element (2) from the array

var arr = [1,2,3,4,5];
var removedElements = arr.splice(1, 1)

console.log(arr)
console.log(removedElements)

// Q2
// Using the array fruits = ["apple", "banana", "orange", "kiwi", "grape"], use the splice method to replace "orange" and "kiwi"
// with "strawberry" and "pineapple"

var fruits = ["apple" , "banana", "orange", "kiwi", "grape"];

var replacedFruits = fruits.splice(2, 2, "strawberry", "pineapple");

console.log(fruits)
console.log(replacedFruits)

// Q3
// Given the array colors = ["red", "green", "blue", "yellow", "purple"], use the slice method to create a new array containing only
// "green" and "blue"

var colors = ["red", "green", "blue", "yellow", "purple"];
var newColors = colors.slice(1,3 )

console.log(colors)
console.log(newColors);

// Q4
// Using the array numbers = [10, 20, 30, 40, 50], use the slice method to create a new array containing the last three elements 

var numbers = [10, 20, 30, 40, 50];

var newNumbers = numbers.slice(2, 5);
console.log(numbers)
console.log(newNumbers)

// Q5
// Create an array called grades with five test scores. Use a for loop to find and print the lowest grade in the array.

var grades = [20, 15, 50, 21, 5,];
var lowestGrade = grades[0]

for(i = 1; i < grades.length; i++ ) {
if (grades[i] < lowestGrade) {
     lowestGrade = grades[i];
}
}

console.log("the lowest grade is :" , lowestGrade)

// Q6
// Using the array numbers = [3, 6, 9, 12, 15], use a for loop to calculate and print the sum of the array's elements.
var numbers = [3, 6, 9, 12, 15];
var sum = 0;

for ( i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum of the array's elements is: " + sum);


// Q7
// Create an array called colors with various color names. Use a for loop to print each color on a separate line.
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

for ( i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Q8
// Given the array prices = [25, 30, 15, 10, 50], use a for loop to find and print the index of the highest price.

var prices = [25, 30, 15, 10, 50];
var highestPrice = prices[0];
var highestPriceIndex = 0;

for ( i = 1; i < prices.length; i++) {
  if (prices[i] > highestPrice) {
    highestPrice = prices[i];
    highestPriceIndex = i;
  }
}

console.log("The index of the highest price is: " + highestPriceIndex);


// Q9
// Using the array words = ["cat", "dog", "elephant", "giraffe", "lion"], use a for loop to create a new array called pluralWords
// containing the plural form of each word


var words = ["cat", "dog", "elephant", "giraffe", "lion"];
var pluralWords = [];

for (i = 0; i < words.length; i++) {
  if (words[i] === "cat") {
    pluralWords.push("cats");
  } else if (words[i] === "dog") {
    pluralWords.push("dogs");
  } else if (words[i] === "elephant") {
    pluralWords.push("elephants");
  } else if (words[i] === "giraffe") {
    pluralWords.push("giraffes");
  } else if (words[i] === "lion") {
    pluralWords.push("lions");
  }
}

console.log(pluralWords); 

// Q10
// Given the array fruits = ["apple", "banana", "cherry", "date", "fig"], use the slice method to create a new array containing only
// "cherry" and "date".

var fruits = ["apple", "banana", "cherry", "date", "fig"];
var newFruits = fruits.slice(2, 4);
console.log(newFruits);


// Q11
// Given the array temperatures = [72, 78, 82, 88, 95], use a for loop to find and print the number of days with temperatures
// above 80.

var temperatures = [72, 78, 82, 88, 95];
var count = 0;

for ( i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 80) {
    count++;
  }
}

console.log(count);

// Q12
// Given the array numbers = [5, 10, 15, 20, 25], use the splice method to insert the number 12 between 10 and 15.

var arrNumbers = [5, 10, 15, 20, 25];

var newNumberArray = arrNumbers.splice(2, 0 , 12)
console.log(arrNumbers)

// Q13
// Create an array called words with different words. Use a for loop and the splice method to remove words that contain more
// than five letters

var words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango"];

for ( i = 0; i < words.length; i++) {
  
  if (words[i].length > 5) {
    words.splice(i, 1);
    i--;
  }
}

console.log(words); 

// Q14
// Using the array numbers = [5, 10, 15, 20, 25], use the splice method and prompt to insert a number at an index provided by
// the use
var numbers = [5, 10, 15, 20, 25];
var index = prompt("Enter the index where you want to insert a number:");
var num = prompt("Enter the number you want to insert:");

numbers.splice(index, 0, num);

console.log(numbers);

// Q15
// Using the array values = [5, 10, 15, 20, 25], ask the user to enter a number. Use a for loop and the slice method to create a
// new array containing only the values less than the user's input.

var values = [5, 10, 15, 20, 25];

var userInput = prompt("Enter a number:");
var userNumber = Number(userInput);
var lessThanUserNumber = [];

for ( i = 0; i < values.length; i++) {
  
  if (values[i] < userNumber) {
    lessThanUserNumber.push(values[i]);
  }
}

console.log(lessThanUserNumber);

// Q16
// Given the array fruits = ["apple", "banana", "cherry", "date", "fig"], use the splice method to remove a fruit of the user's choice.
// Ask the user to enter the index of the fruit they want to remove

var fruits = ["apple", "banana", "cherry", "date", "fig"];
var index = prompt("Enter the index of the fruit you want to remove:");

if (index >= 0 && index < fruits.length) {
  var removed = fruits.splice(index, 1);
  console.log(`Removed ${removed[0]} from the array.`);
  console.log(fruits);
} else {
  console.log("Invalid index.");
}




