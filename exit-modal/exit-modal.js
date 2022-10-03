'use strict'

function decrementTime() {
    let now = new Date().getTime();
    countDownDate = new Date (countDownDate)
    let distance = countDownDate -  now;

    // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // days = (days.toLocaleString(undefined,{minimumIntegerDigits: 2}));
    // hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));
    minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 1}));
    seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));

    if (seconds < 0) {
        clearInterval(x);
        secsTicker.innerHTML="00";
        minsTicker.innerHTML="0";
    }
    else {
        let minsTicker = document.getElementById("minsTicker");
        minsTicker.innerHTML=minutes;        
        let secsTicker=document.getElementById("secsTicker");
        secsTicker.innerHTML = seconds;
    }
}



//Initializations
let now = new Date().getTime();
let afterFiveMins = new Date(now + 5 * 60000);
let countDownDate;
countDownDate = localStorage.getItem("countDownDate",countDownDate);

if (!countDownDate){
    countDownDate = afterFiveMins;
    localStorage.setItem("countDownDate",countDownDate);
}


//Update the timer once immediately, and begin the timer a second later
decrementTime();
var x = setInterval(decrementTime, 1000);