console.log("If Else in JS");


/**
 * IF ELSE
 * it helps in decision making 
 * condition is something that evaluates into true or false
 * 
 * 
 */



// let age = 2000
// if(age >= 18 && age < 150){
//     console.log("you are over 18 so you can drive");
// }else if(age < 0){
//     console.log("negative age found . Invalid Value");
//     console.log("Please type correct age");
// }else if(age >= 150){
//     console.log("you are over 150 . you are prohibited to drive");
// }
// else{
//     console.log("you are underage so you cannot drive");
// }







//**
// PROBLEM STATEMENT
// take 12th marks from user , find percentage and give grade on the base of numbers or percentages
// 
//  */
let trigger = confirm("Do you want to check your grades?");
console.log(trigger);


if(trigger){

    let totalMarks = prompt("Enter your  totsl FSc marks");
    let userMarks = prompt("Enter your FSc marks");
    // find percentage
    let percentage = (userMarks/totalMarks) * 100;
    percentage = Math.round(percentage);
    
    // find grades
    /**
     * 90 >= A+
     * 80 >= A
     * 70 >= B
     * 75 >= B+
     * 60 >= C
     * 65 >= C+
     * 60 < F
     */
    
    if(percentage >= 90){
        alert("you have secured A+ Grade with percentage of " +  percentage + "%" );
    }else if(percentage >= 80 && percentage < 90){
        alert("you have secured A Grade with percentage of " + percentage+ "%" );
    }else if(percentage >= 75 && percentage < 80){
        alert("you have secured B+ Grade with percentage of " + percentage + "%" );
    }else if(percentage >= 70 && percentage < 75){
        alert("you have secured B Grade with percentage of " + percentage + "%");
    }else if(percentage >= 65 && percentage < 70){
        alert("you have secured C+ Grade with percentage of " + percentage+ "%" );
    }else if(percentage >= 60 && percentage < 65){
        alert("you have secured C Grade with percentage of " + percentage + "%");
    }else {
        alert("you have secured F Grade " + percentage + "%");
    }
    
}
/**
 * alert() => show something
 * prompt() => take input
 * confirm() => take yes/no
 */

// alert("hala madrid");
