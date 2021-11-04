const newyear='01/01/2022';
let second=document.getElementById('seconds');
let minute=document.getElementById('minutes');
let hour=document.getElementById('hours');
let day=document.getElementById('days');
function date(){
    let currentdate=new Date();
let newdate=new Date(newyear);
    let lefttime=(newdate-currentdate)/1000;
    let seconds=Math.floor(lefttime)%60;
    let minutes=Math.floor(lefttime/60)%60;
    let hours=Math.floor(lefttime/3600)%24;
    let days=Math.floor(lefttime/3600/24);
    second.innerHTML=seconds;
    minute.innerHTML=minutes;
    hour.innerHTML=hours;
    day.innerHTML=days;

    // console.log(newdate,currentdate)
}


// date();
 setInterval(date,1000); 