// let userInput = parseInt(prompt("Enter the numbers"));

// let sumNumbers = (n1,n2,n3,n4,n5,n6,n7,n8,n9,n10) => {
//     let addition = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
//     alert(`The sum is ${addition}`)
//     return addition;
// }
// sumNumbers(1,2,4,6,4,7,8,4,3,9);

// Find area and parimeter of Square

let sideLength = parseInt(prompt("Enter the Length"));

let calculateSquare = (side) => {
  let area = side * side;
  let perimeter = 4 * side;
  console.log(`Area is ${area},Perimeter is ${perimeter}`);
  return {
    area: area,
    perimeter: perimeter,
  };
};

let result = calculateSquare(sideLength);
console.log("Result: ", result);
