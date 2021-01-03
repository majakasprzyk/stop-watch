console.log('Good luck!')

const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".startBtn")
const nextBtn = document.querySelector(".nextBtn");
const stopBtn = document.querySelector(".stopBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const saveBtn = document.querySelector(".saveBtn");
const resetBtn = document.querySelector(".resetBtn");

// shows time as a string

function timeToString(time) {
    let hours = time / 3600000;
    let hh = Math.floor(hours);
  
    let minutes = (hours - hh) * 60;
    let mm = Math.floor(minutes);
  
    let seconds = (minutes - mm) * 60;
    let ss = Math.floor(seconds);
  
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
  
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  };


  let startTime;
  let elapsedTime;


  // start button 
  
  startBtn.addEventListener('click', () => {
    startTime = Date.now();
    setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        timer.innerHTML = timeToString(elapsedTime);
    }, 1000);
  });



  // pauseBtn.addEventListener("click", pause);
  // resetBtn.addEventListener("click", reset);
  

