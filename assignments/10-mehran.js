calulate = confirm("Do you want to calculate the numbers?\n If yes cilck ok button");

if (calulate) {
    let userInput = parseFloat(parseInt(prompt("Choose a number to calculate.\n 1:Addition \n 2:Subtract \n 3:Multiply \n 4:Division")));
    let cal = () => {
        if (UserInput === 1) {
            let number1 = parseFloat(parseInt(prompt("Enter first Value")));
            number2 = parseFloat(parseInt(prompt("Enter a second value")));
            let Addition = number1 + number2;
            alert(Addition);
        } else if (UserInput === 2) {
            let number1 = parseFloat(parseInt(prompt("Enter a first value")));
            number2 = parseFloat(parseInt(prompt("Enter a second value")));
            let Subtract = number1 + number2;
            alert(Subtract);
        } else if (UserInput === 3) {
            let number1 = parseFloat(parseInt(prompt("Enter a first value")));
            number2 = parseFloat(parseInt(prompt("Enter a second value")));
            let Multiply = number1 + number2;
            alert(Multiply);
        } else if (UserInput === 4) {
            let number1 = parseFloat(parseInt(prompt("Enter a first value")));
            number2 = parseFloat(parseInt(prompt("Enter a second value")));
            let Division = number1 + number2;
            alert(Division);
        } else {
            alert("Invalid Value");
        }
    }
    cal();
}