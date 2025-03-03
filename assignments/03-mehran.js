let totalmarks = prompt("Enter your total marks") //take input from the user
let obtainedmarks = prompt("Enter your obtain marks")

let percentage = (obtainedmarks/totalmarks) * 100;
percentage = Math.round(percentage)
console.log(percentage);

// percentage >= 90 (A+)
// percentage >= 80 (A)
// percentage >= 70 (B+)
// percentage >= 60 (B)
// percentage >= 50 (D)
// percentage <= 50 (F)

if(percentage >= 90){
    alert("Congrulations you have secured A+ Grade" + percentage+"%");
}else if(percentage >= 80 && percentage < 90){
    alert("well done you secured A grade" + percentage+"%");
}else if(percentage >=70 && percentage < 80){
    alert("You have secured B+ grade" + percentage+"%");
}else if(percentage >=60 && percentage <70){
    alert("you have secured B grade" + percentage+"%");
}else if(percentage >=50 && percentage <60){
    alert("you have secured C grade" + percentage+"%");
}else{
    alert("sorry u are fail" + percentage+"%");
}



