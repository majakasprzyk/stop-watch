console.log('Good luck!')

const timer = document.querySelector(".timer");
const secondTimer = document.querySelector(".second-timer")
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

    let milliseconds = (seconds - ss) * 100;
    let ms = Math.floor(milliseconds);
  
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  };


  let startTime;
  let elapsedTime = 0;

function print(text){
  timer.innerHTML = text;
}

  // start button 

  startBtn.addEventListener('click', start);
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(printTime, 10);
  };

  function printTime(){
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime))
  };

// pause button

pauseBtn.addEventListener("click", pause);

  function pause(){
    clearInterval(timerInterval);
  };

// reset button 

resetBtn.addEventListener("click", reset);

function reset(){
  clearInterval(timerInterval);
  print("00:00:00");
  elasedTime = 0;
};
  
// next button

nextBtn.addEventListener("click", next);

function next(){
  secondTimer.style.display = "block";
  clearInterval(timerInterval);

};
