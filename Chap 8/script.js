// Q1 Even/Odd Number Checker:

var num = prompt("Enter the number");
if(num % 2 === 0){
    console.log("the number is even")
}
else{
    console.log("the number is odd")
}

// Q2 Positive/Negative Number Checker:

var num1 = prompt("Input the number")
if(num1 > 0){
   console.log("the number is positive")
}
else{
    console.log("the number is negative")
}

// Q3 Maximum of Two Numbers:

var num1 =prompt("enter 1st number"); 
var num2 =prompt("enter 2nd number"); 
var largerNumber;
if (num1 > num2) {
  largerNumber = num1;
} else {
  largerNumber = num2;
}
console.log("The larger number is:", largerNumber);

// Q4 Ask the user for three numbers. Display the smallest number.

var num1 = prompt("enter 1st number");
var num2 = prompt("enter 2nd number");
var num3 = prompt("enter 3rd number");

var smallestNumber = num1;
if(num2 < smallestNumber){
    smallestNumber = num2;
}
else if(num3 < smallestNumber){
    smallestNumber = num3;
}
else  {
    smallestNumber = ("null");
}

console.log("the smallest number is", smallestNumber);

// Q5 Factorial Calculator:

var num = prompt("enter any number for factorial");

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else if (num < 0) {
      return "Factorial is not defined for negative numbers";
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  var answer = factorial(num);
console.log(`The factorial of ${num} is ${answer}`);

// Q6 Grade Calculator

    var mark1 = prompt("Enter marks for subject 1 (out of 100):");
    var mark2 = prompt("Enter marks for subject 2 (out of 100):");
    var mark3 = prompt("Enter marks for subject 3 (out of 100):");
  
    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
      alert("Please enter valid numbers for marks.");
    }
  
    var average = (mark1 + mark2 + mark3) / 3;

    var grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    console.log(`Your average score is: ${average.toFixed(2)}`);
    console.log(`Your grade is: ${grade}`);
  
  
// Q7 Temperature Converter:

   
    var celsius =prompt("Enter temperature in Celsius:");
  
    var fahrenheit = (celsius * 9 / 5) + 32;
  
    console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
 
  
// Q8 Triangle Type Identifier:

var side1 = prompt("Enter the length of side 1:");
var side2 = prompt("Enter the length of side 2:");
var side3 = prompt("Enter the length of side 3:");

if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
  alert("Please enter valid positive numbers for side lengths.");

}

if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
  console.log("Invalid triangle: The sum of any two sides must be greater than the third side.");
  
}

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle: All three sides are equal.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle: Two sides are equal.");
} else {
  console.log("Scalene Triangle: All three sides are unequal.");
}

 
// Q9. Character Vowel/Consonant Checker:

var character = prompt("Enter a character:").toLowerCase();

if (character.length !== 1 || !isNaN(character)) {
  alert("Please enter a single alphabetical character.");
}

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// Q10 Power Calculator:

var base = prompt("Enter the base number:");
var exponent = prompt("Enter the exponent (whole number):");

var result = 1;
for (var i = 0; i < exponent; i++) {
  result *= base;
}

console.log(`${base} raised to the power of ${exponent} is ${result}`);

// Q11 Age Group Classifier

var age =prompt("Enter your age:");

var message;
if (age >= 0 && age <= 12) {
  message = "Child";
} else if (age >= 13 && age <= 19) {
  message = "Teenager";
} else if (age >= 20 && age <= 64) {
  message = "Adult";
} else {
  message = "Senior";
}
console.log(`You are classified as: ${message}`);
