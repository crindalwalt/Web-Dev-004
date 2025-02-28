

// if else 
// checking grades

let check = confirm("Are you going to check your grades");
console.log(check);
if(check){

    let TotalMarks = prompt("Enter your  total marks");
    let ObtainedMarks = prompt("Enter your obtained marks");
    let percentage = (ObtainedMarks/TotalMarks) * 100;
    percentage = Math.round(percentage);

    //   90 >= A+
    //   80 >= A
    //   75 >= B+
    //   70 >= B
    //   65 >= C+
    //   60 >= C
    //   55 >= D+
    //   45 >= D
    //   30 >F

      if(percentage >= 90){
        alert("you have  A+ Grade with the percentage of " +  percentage + "%" );
    }else if(percentage >= 80 && percentage < 90){
        alert("you have  A Grade with the percentage of " + percentage+ "%" );
    }else if(percentage >= 75 && percentage < 80){
        alert("you have  B+ Grade with the percentage of " + percentage + "%" );
    }else if(percentage >= 70 && percentage < 75){
        alert("you have  B Grade with the percentage of " + percentage + "%");
    }else if(percentage >= 65 && percentage < 70){
        alert("you have  C+ Grade with the percentage of " + percentage+ "%" );
    }else if(percentage >= 60 && percentage < 65){
        alert("you have  C Grade with the percentage of " + percentage + "%");
    }else if(percentage >= 55 && percentage < 60){
        alert("you have  D+ Grade with the percentage of " + percentage + "%");
    }else if(percentage >= 45 && percentage < 55){
        alert("you have  D Grade with the percentage of " + percentage + "%");
    }else alert("you have  F Grade  with the percentage of " + percentage + "%"); 

}
