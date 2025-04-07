con = confirm("Do you want to calculate the random number");
if (con) {
  let userInput = parseFloat(
    parseInt(
      prompt(
        "Choise the number for calculation \n 1: addition \n 2:Subtract \n 3: Multiplication \n 4: Division "
      )
    )
  );
  let calculat = () => {
    if (userInput === 1) {
      let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
      num2 = parseFloat(parseInt(prompt("Enter the value 2")));
      let addition = num1 + num2;
      alert(addition);
    } else if (userInput === 2) {
      let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
      num2 = parseFloat(parseInt(prompt("Enter the value 2")));
      let subtract = num1 - num2;
      alert(subtract);
    } else if (userInput === 3) {
      let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
      num2 = parseFloat(parseInt(prompt("Enter the value 2")));
      let multy = num1 * num2;
      alert(multy);
    } else if (userInput === 4) {
      let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
      num2 = parseFloat(parseInt(prompt("Enter the value 2")));
      let division = num1 / num2;
      alert(division);
    } else {
      alert("Invalid value");
    }
  };
  calculat();
}
