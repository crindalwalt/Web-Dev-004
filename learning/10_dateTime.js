console.log("Hello from the Date Time Class");

/**
 * Date Time in js
 *
 */

// initializing date time object
let dateTime = new Date();

// date
let dateToday = dateTime.getDate();

// day
let dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = dateTime.getDay();
day = dayArray[day];

// month
let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = dateTime.getMonth();
month = monthArray[month];

// year
let year = dateTime.getFullYear();

// hours
let hour = dateTime.getHours();

// minutes
let minutes = dateTime.getMinutes();

// seconds
let seconds = dateTime.getSeconds();

// miliseconds
let miliSeconds = dateTime.getMilliseconds();

// Wednesday 19 March, 2025
//
let dateString = `${day} ${dateToday} ${month}, ${year}`;
let timeString = `${hour}:${minutes} ${seconds} ${miliSeconds}`;

// function to print time after a specified time

let timeToday = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let miliSeconds = date.getMilliseconds();

  let timeString = `${hour}:${minutes} ${seconds} ${miliSeconds}`;
  console.log(timeString);
};

setInterval(() => {
//   timeToday();
//   console.log(timeString);
}, 1000);

// setTimeout(function(){
//     console.log("Boom, everything is destroyed");
// },2000)
console.log(timeString);
