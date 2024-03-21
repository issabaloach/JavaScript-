// Question 1
// Write a loop to print numbers from 1 to 10.

for (i=1; i<=10; i++) {
     console.log(i);
}


// Question 2
// Write a loop to print even numbers from 1 to 20.

for (i=1; i<=20; i++ ){
   
    if(i%2==0){
       console.log(i);
    }
}

// Question 3
// Write a loop to print odd numbers from 1 to 15


for (i=1; i<=20; i++ ){
   
    if(i%2==1){
       console.log(i);
    }
}

// Question 4
// Write a loop to calculate and print the factorial of a number (let's say 5).

number = 5;
factorial = 1;

for (i= 1; i <= number; i++) {
    factorial *= i;
}

console.log(`Factorial of ${number}: ${factorial}`);


// Question 5
// Write a loop to print the multiplication table of a number (let's say 7) up to 10.

number = 7
for (i=1; i<=10; i++) {
  
    console.log(`7*${i} = ${number*i} `);
}

// Question 6
// Write a loop to print the Fibonacci series up to the 10th term.

n1 = 0;
n2 = 1;

console.log("Fibonacci Series:");

for(i=1; i<=10; i++ ){
   console.log(n1)
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
}


// Question 7
// Write a loop to find and print the sum of digits of a number (let's say 123).

var num = 123
var sum = 0;

for (var i = 0; i < num.toString().length; i++) {
  sum += parseInt(num.toString().charAt(i));
}

console.log(sum);

// Question 8
// Write a loop to print the reverse of a string (let's say "hello").

var str = "hello";
var reversedStr = "";

for (i= str.length-1; i>=0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr); 


// Question 9
// Write a loop to print the square of numbers from 1 to 10


console.log("square of a numbers from 1 to 10");
for( i=1; i<=10; i++){
console.log(i*i);
}


// Question 10
// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).
var arr = [3, 7, 2, 9, 5];
var lar = arr[0];

console.log("the largest number in an array is:");
for (i = 1; i < arr.length; i++) {
  if (arr[i] > lar) {
    lar = arr[i];
  }
}

console.log(lar);
