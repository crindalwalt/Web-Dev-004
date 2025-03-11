console.log("Loops");
/**
 *
 *
 * Loops
 *  loops run some code in an iterative manner
 *  loops are used to run the same code multiple times
 * Types
 *  1. for loop
 *  2. while loop
 *  3. do while loop
 *
 * Requirement
 *  1) a controlling variable
 *  2) a condition
 *  3) a increment or decrement to the controlling variable
 *
 */

// for loop
// for ( an controlling variable; a condition ; increment or decrement ) {
//     // code to be executed

// }

let friendsNames = [
  "Ali",
  "Ahmed",
  "Shahzad",
  "Asad",
  "Usman",
  "Bilal",
  "Kashif",
  "Zain",
  "Sajjad",
  "Ejaz",
  "Nadeem",
  "Salar",
  "Farooq",
  "Muhammad",
  "Imran",
];

// for(let index = 0;index < friendsNames.length; index++ ){
//     let friendName = friendsNames[index];
//     console.log(friendName + " is my friend");
// }

// let index = 0;
// while (index > friendsNames.length) {
//   let friendName = friendsNames[index];
//   console.log(friendName + " is my friend");

//   index++;
// }

// do {
//   let friendName = friendsNames[index];
//   console.log(friendName + " is my friend");

//   index++;
// } while (index < friendsNames.length);

// user se input lena
let userInput = prompt("Enter a number for printing table except 0");
userInput = parseInt(userInput);

if (userInput <= 0) {
  alert("Invalid input");
}else{
    let index = 1;
    while(index <= 20){
        // 2 x 1 = 2
        // 2 x 2 = 4
        let multiplication = userInput * index;
        console.log(userInput + " X " + index + " = " + multiplication);
        index++;
    }
}
