

//Create a multi-input sum,multiplication,subtraction,division calculator using function

let calculate = () => {
    let con = confirm("Do you want to calculate a number?");
    
    if (con) {
        let userInput = parseInt(prompt("Choose the operation:\n 1: Addition\n 2: Subtraction\n 3: Multiplication\n 4: Division"));

        if (userInput < 1 || userInput > 4 || isNaN(userInput)) {
            alert("Invalid choice! Please select a valid operation.");
        } else {
            let numCount = parseInt(prompt("How many numbers do you want to calculate?"));

            if (numCount < 2 || isNaN(numCount)) {
                alert("You must enter at least two numbers.");
            } else {
                let result = parseInt(prompt("Enter number 1:"));

                for (let i = 1; i < numCount; i++) {
                    let num = parseInt(prompt(`Enter number ${i + 1}:`));

                    if (userInput === 1) {
                        result += num;
                    } else if (userInput === 2) {
                        result -= num;
                    } else if (userInput === 3) {
                        result *= num;
                    } else if (userInput === 4) {
                        result /= num;
                    }
                }

                alert("Result: " + result);
            }
        }
    }
};

// Calling the arrow function
calculate();
