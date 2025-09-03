// Digital Clock

function a1() {
    let a = new Date();
    let date = a.toLocaleDateString();

    let time = a.toLocaleTimeString();
    a.getHours;
    a.getMinutes;
    a.getSeconds;



    console.log(a);
    let ntime = document.querySelector(".box");
    ntime.innerHTML = "<b> Today's Date is :</b>" + date + "<br>" + "<b>Current Time is:</b>" + time;

    //Analog Clock
    let hhand = document.querySelector(".hourhand");
    let mhand = document.querySelector(".minutehand");
    let shand = document.querySelector(".secondhand");


    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();

    shand.style.transform = `rotate(${seconds * 6}deg)`;

    mhand.style.transform = `rotate( ${minutes * 6}deg)`;
    hhand.style.transform = `rotate( ${(hours % 12) * 30 + minutes * 0.5}deg)`;




}

setInterval(a1, 1000);






