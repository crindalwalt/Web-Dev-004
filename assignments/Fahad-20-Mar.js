con = confirm("Do you want to calculate the random number");
if (con) {
  let userInput = parseFloat(
    parseInt(
      prompt(
        "Choise the number for calculation \n 1: Addition \n 2:Subtraction \n 3: Multiplication \n 4: Division "
      )
    )
  );
  if (userInput === 1) {
    let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
    num2 = parseFloat(parseInt(prompt("Enter the value 2")));
    let Addition = num1 + num2;
    alert(Addition);
  } else if (userInput === 2) {
    let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
    num2 = parseFloat(parseInt(prompt("Enter the value 2")));
    let Subtraction = num1 - num2;
    alert(Subtraction);
  } else if (userInput === 3) {
    let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
    num2 = parseFloat(parseInt(prompt("Enter the value 2")));
    let Multiplication = num1 * num2;
    alert(Multiplication);
  } else if (userInput === 4) {
    let num1 = parseFloat(parseInt(prompt("Enter the value 1")));
    num2 = parseFloat(parseInt(prompt("Enter the value 2")));
    let Division = num1 / num2;
    alert(Division);
  }
}
