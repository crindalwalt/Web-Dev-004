console.log("Hello from the Switch Page");

let nam = "Ali";

// switch case to determine person
switch (nam) {
  case "Ali":
    console.log("you are Ali, Good to see you Ali");
    break;
  case "Hassan":
    console.log("you are Hassan , Nice to meet you");
    break;
  case "Alina":
    console.log("Hello Alina, Good Morning");
    break;
  default:
    console.log("you are not Ali, nor Alina, neither Hassan");
    break;
}

let day = prompt("Enter day index");
day = parseInt(day);

switch (day) {
  case 0:
    alert("Sunday");
    break;
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  default:
    alert("Invalid value");
    break;
}
