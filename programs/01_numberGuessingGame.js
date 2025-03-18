
// generate a random number
let kuchBhi = Math.random() * 10;
kuchBhi = Math.ceil(kuchBhi);


// prompt user for a guess
let userInput =parseInt( prompt("Take a guess between 1 and 10"));

// check if guess is right or not
if(userInput === kuchBhi){
    alert(`You are right,\n You won\n You guess ${kuchBhi} right `)
}else{
    alert(`Number was ${kuchBhi} you guess it to be ${userInput},\n You lose\n try again `)

}
