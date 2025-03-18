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

let tableConfirmation = confirm("Do you want to print table? (yes/no)");
if (tableConfirmation) {
  let userInput = prompt("Enter a number"); // string value
  userInput = parseInt(userInput); // convert string to number

  let tableCount = prompt("Enter the number of tables you want to print");
  tableCount = parseInt(tableCount);

  if (userInput <= 0) {
    console.error("Invalid values");
  } else {
    // printing userInput to the console
    // loop lgana

    for (let index = 1; index <= tableCount; index++) {
      let tableLine = userInput + " X " + index + " = " + userInput * index;
      console.log(tableLine);
    }
  }
}
