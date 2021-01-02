console.log('Good luck!')

const startBtn = document.querySelector(".startBtn")
const nextBtn = document.querySelector(".nextBtn");
const stopBtn = document.querySelector(".stopBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const saveBtn = document.querySelector(".saveBtn");
const resetBtn = document.querySelector(".resetBtn");
const timer = document.querySelector("timer");


function timeToString(time) {
    let hours = time / 3600000;
    let hh = Math.floor(hours);
  
    let minutes = (diffInHrs - hh) * 60;
    let mm = Math.floor(minutes);
  
    let seconds = (diffInMin - mm) * 60;
    let ss = Math.floor(seconds);
  
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
  
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  };
