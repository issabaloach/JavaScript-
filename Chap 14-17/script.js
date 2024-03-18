// QUESTION 1
// Declare an empty array using JS literal notation to store
// student names in future.


var studentNames=[];

studentNames.push("issa")
studentNames.push("haseeb")
studentNames.push("wasay")
document.write("these are the names of students <br>" ,   studentNames)

document.write("<br>")
// QUESTION 2
// Declare an empty array using JS object notation to store
// student names in future.

const studentName= [];

studentName.unshift("hello")
document.write("<br> this is 2nd Q ans -->",  studentName)

document.write("<br>")
// QUESTION 3
// Declare and initialize a strings array

var str = ["hi", "this", "is", "the", "3rd", "Q" , "for" , "String", "in", "an" , "array"]
var length =(str.length)
document.write("<br>",length)

document.write("<br>")

// QUESTION 4
// Declare and initialize a numbers array

var num=[1, 2, 3, 4, 5, 6, 7, 8, 9]
document.write("<br>", num)

document.write("<br>")
// Question 5
// Declare and initialize a boolean array.

const hasAccess = [true, false, true]; 

if (hasAccess[0]) { 
  document.write("<br> Issa has access.");
}

document.write("<br>")
// Question 6
// Declare and initialize a mixed array

var mixedArray = ["apple", 3.14, true, { name: "Alice" }];
document.write("<br>",  mixedArray)

document.write("<br>")
// Question 7
// Declare and Initialize an array and store available mobile
// networks in Pakistan.

var mobileNetworks = ["Jazz" ,  "Zong" ,  "Onic" , "Ufone", "Telenor"]
document.write("<br> some mobile networks in Pakistan <br>",  mobileNetworks)

document.write("<br>")
// Question 8
// Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser

var qualifications = ["SSC" ,"HSC" , "BCS", "BS", "BCOM" , "MS", "M.PHIL", "PHD"]
document.write(" <br> <h2> Qualification in Pakistan </h2> <br> ")
document.write( " <br> 1:" ,qualifications[0])
document.write( " <br> 2:" ,qualifications[1])
document.write( " <br> 3:" ,qualifications[2])
document.write( " <br> 4:" ,qualifications[3])
document.write( " <br> 5:" ,qualifications[4])
document.write( " <br> 6:" ,qualifications[5])
document.write( " <br> 7:" ,qualifications[6])
document.write( " <br> 8:" ,qualifications[7])

document.write("<br>")


// Question 9
// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

var movies = [];
movies.push("Avengers")
movies.push("Antman")
movies.push("Superman")
movies.push("Deadpool")
movies.push("Guardian of the galaxy")

var mlength =(movies.length)
document.write("<h2> <br> TOP MOVIES OF 2015 </h2>")
document.write(" <br> " , movies[0])
document.write(" <br> " , movies[1])
document.write(" <br>" , movies[2])
document.write(" <br> " , movies[3])
document.write(" <br>" , movies[4])


document.write("<h2> length of an array: </h2> " , mlength )

document.write("<br>")
// QUESTION 10
// Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

var favCar =["Nissan GTR" , "Toyota Supra", "Evolution" , "Audi" ]

var firstIndex = 0 ;
var firstCar = favCar[firstIndex];
var lastIndex = 3;
var lastCar = favCar[lastIndex];
document.write("<br> <h2> Favourite Cars </h2>")
document.write("<br> First index of an array is: " ,firstIndex)
document.write("<br> Car at first index of an array: ", firstCar)
document.write("<br> Last index of an array; " , lastIndex)
document.write("<br> Car at last index of an array: " ,lastCar)

document.write("<br>")

// QUESTION 11
// Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students

var names = ["Haseeb" , "Hanan" , "Issa"];
var marks = [430 , 450 , 451];

totalMarks = 500;

var percentage1 = (marks[0]/totalMarks) *100;
var percentage2 = (marks[1]/totalMarks) *100;
var percentage3 = (marks[2]/totalMarks) *100;

document.write("<br> <h2> Students Marks </h2>")
document.write("<br> Score of Haseeb is :  " ,marks[0], " , percentage  ", percentage1, "%" )
document.write("<br> Score of Hanan is  :  " ,marks[1], " , percentage  ", percentage2, "%" )
document.write("<br> Score of Issa is   :  " ,marks[2], " , percentage  ", percentage3, "%" )

// QUESTION 13
// Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

var studentScore = [333, 454, 565, 121, 343, 555, 676];
document.write(" <h3> Score of Students </h3>" , studentScore)

var scoreSort  = studentScore.sort()
document.write("<br> <h3> Ordered score of students </h3>" , scoreSort)

// QUESTION 14
// Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

var fruits = ["strawberry" , "apple", "orange", "banana"]
document.write(" <h3> fruits </h3> " , fruits)

var fruitsSort  = fruits.sort();
document.write("<br> <h3> Ordered fruits list </h3>" , fruitsSort)

// QUESTION 15
// Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array. 
document.write("<br> <h2> Copy 3 array </h2>")
var cityNames = ["Karachi" , "Lahore" , "Sukkur", "Peshawar" , "Multan",];
selectedCities = cityNames.slice(0,3)

document.write( " <br>city names = " , cityNames)
document.write(" <br>selected cities = " , selectedCities )


// QUESTION 16
// Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

document.write("<br> <h2> Array Join Method </h2>")
var animal = ["this" , "is" , "my" , "cat"];
joinedanimal = animal.join("   ");

document.write(" <br> Animal array = "  , animal)
document.write(" <br> joined array = "  , joinedanimal)



// QUESTION 17
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
// Create an empty array

document.write("<br>")
document.write("<h2> Question 17 is in Console FIFO </h2>")
var fifo = ["keyboard" , "mouse", "trackpad", "touchpad" , "monitor"]
console.log(fifo)
console.log("out " ,fifo.shift(0));
console.log("out " ,fifo.shift(1));
console.log("out " ,fifo.shift(2));
console.log("out " ,fifo.shift(3));
console.log("out " ,fifo.shift(4));


// Question 18
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)

document.write("<br>")
document.write("<h2> Question 18 is in Console LIFO </h2>")
var lifo = ["motorola" , "iphone", "google pixel", "nothing" , "samsung"]
console.log(lifo)
console.log("out " ,lifo.pop(0));
console.log("out " ,lifo.pop(1));
console.log("out " ,lifo.pop(2));
console.log("out " ,lifo.pop(3));
console.log("out " ,lifo.pop(4));

// QUESTION 19
// Write a program to store phone manufacturers (Apple,
  // Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
  // the following dropdown/select menu in your browser using
  // document.write() method:

   document.write("<br>");
   document.write("<h3> Dropdown </h3>")
    const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    function createDropdown() {
       
        const select = document.createElement("select");

 
        const defaultOption = document.createElement("option");
        defaultOption.text = "Select a Manufacturer";
        defaultOption.value = "";
        select.add(defaultOption);

        for (const manufacturer of manufacturers) {
            const option = document.createElement("option");
            option.text = manufacturer;
            option.value = manufacturer;
            select.add(option);
        }
        document.write(select.outerHTML);
    }

    createDropdown()
  
    // QUESTION 20
    // Declare and initialize an empty multidimensional array.
    //    (Array of arrays)
     
    var multidimensional_array=[
      [],
      [],
      []
    ]

    console.log(multidimensional_array);

    // QUESTION 21
    // Declare and initialize a multidimensional array representing
// the following matrix

var matrix = [
  [1, 2, 3],  
  [4, 5, 6],  
  [7, 8, 9]   
];
document.write(matrix)
console.log(matrix[1][2]); 

