console.log("Welcome to the Arrays Class");

let nombre = "Shahzad Farooq";
let age = 21;
let isMarried = true;
let error = undefined;

let myFriends = ["Shahzad", "Zaid", "Muhtshim"];
let myMarks = [80, 78, 21, 56, 36, 90];
let myDetails = [];
myFriends.push("Ali Imran"); // add element at the end of array
myFriends.push("Tayyab");
myFriends.pop(); // remove element from the end of array
myFriends.unshift("Gufran");
myFriends.shift();

// object
let mySelf = {
  name: "shahzad",
  age: 21,
  isMarried: false,
  friends: ["Zaid", "Muhtshim"],
};

// console.log(mySelf);

mySelf.name = "Ali Imran";
// console.log(mySelf);

// 2D
let array2D = [
    [1,2,3,4,5,6],
    "Faika",
    6765,
     [
        11,
        1,
        12,
        ["Windows","MacOs",["ubuntu","parrot","kali","kde neon"]]
    ],
        ["shahzad","zaid","hassan"],"Ikomservices.co.uk"]
console.log(array2D[3][3][2][0]);