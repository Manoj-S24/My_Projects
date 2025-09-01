// Digital Clock

function a1() {
    let a = new Date;
    let date =a.toLocaleDateString();
   
    let time=a.toLocaleTimeString();
    a.getHours;
    a.getMinutes;
    a.getSeconds;
  
    console.log(a);
    let ntime=document.querySelector(".box");
    ntime.innerHTML="<b> Today's Date is :</b>"+ date +"<br>" + "<b>Current Time is:</b>" + time ;
}

setInterval(a1, 900,);

// Analog Clock



    
