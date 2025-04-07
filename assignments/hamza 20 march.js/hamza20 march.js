con = confirm("Do you want to calculate the random number ?");
   if (con) {
      let userInput = parseInt(prompt("select the number for calculation:\n 1:addition \n 2:subtraction \n 3:multiply \n 4:division"));
   if (userInput === 1) {
   let num1 = (parseInt(prompt("Enter the value 1")));
       num2 = (parseInt(prompt("Enter the value 2")));
      let addition = num1+ num2 ;
       alert(addition);
      }
   
   
   else if (userInput === 2) {
      let num1 = parseInt(prompt("Enter the value 1"));
          num2 = parseInt(prompt("Enter the value 2"));
      let subtraction = num1 - num2;
      alert(subtraction);
   }

   else if (userInput === 3) {
      
      let num1 = (parseInt(prompt("Enter the value 1")));
          num2 = (parseInt(prompt("Enter the value 2")));
      let multiply = num1* num2;
      alert( multiply);
   }

else if (userInput === 4) {
   let num1 = (parseInt(prompt("Enter the value 1")));
       num2 = (parseInt(prompt("Enter the value 2")));
       let division = num1 / num2;
       alert(division);
  } 
   }