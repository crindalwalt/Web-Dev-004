//**
// Functions are block of code that are intended for reuse
// function are of two types
// 1) common js function
// 2) es6 arrow function
//
// function has two parts
//  function definition
//  function call
//
//  string litrals
//
// function intake
//  perameters
//  arguments
//
//  */

// function definition
function greet() {
  let friendName = prompt("Enter the name of your best friend");
  let age = parseInt(prompt("Enter your age"));

  // code packet
  alert(
    `Hello ${friendName}, how are you .you have lived ${age} years of your life`
  );
}

function createTable() {
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
}
function sum(n1, n2, n3, n4) {
  let addition = n1 + n2 + n3 + n4;
  alert(`the sum is ${addition}`);
}

// greet();
// sum(12, 23, 45, 67);
// createTable();
// greet();

/**
 * ***************************************************************************
 * ************************  Arrow Function **********************************
 * ***************************************************************************
 */

// function definition
let greetingFriends = (name, age) => {
  console.log(`Hello ${name} you have lived ${age} years of your life`);
};

let oneOfMyFriend = "Danial";

// greetingFriends("Alina",27);
// greetingFriends(oneOfMyFriend,29);

// user details

let userName = prompt("Enter your name");
let matricTotalMarks = parseInt(
  prompt("What are your total marks for Matric exam")
);

let matricObtainedMarks = parseInt(prompt("What was your obtained Marks"));

// create a function to generate persentaage

let getMatricPersentage = (totalMarks, obtainedMarks) => {
  let persentage = (obtainedMarks / totalMarks) * 100;
  persentage = Math.round(persentage);
  return persentage;
};

let getGrades = (perc) => {
  if (perc >= 90) {
    console.log(`You have got A+ grade`);
    return "A+";
  } else if (perc >= 80 && perc < 90) {
    console.log(`You have got  A grade`);
    return "A";
  } else if (perc >= 70 && perc < 80) {
    console.log(`You have got  B grade`);
    return "B";
  } else if (perc >= 60 && perc < 70) {
    console.log(`You have got  C grade`);
    return "C";
  } else if (perc < 60) {
    console.log(`You have got  F grade`);
    return "F";
  } else {
    console.log("invalid value");
    return null;
  }
};



let percentage = getMatricPersentage(1400, 1234);
let grades = getGrades(percentage);
console.log(grades);


