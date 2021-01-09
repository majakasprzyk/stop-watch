console.log('Good luck!')

const timer = document.querySelector(".timer");
const secondTimer = document.querySelector(".second-timer");
const startBtn = document.querySelector(".startBtn")
const nextBtn = document.querySelector(".nextBtn");
const stopBtn = document.querySelector(".stopBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const saveBtn = document.querySelector(".saveBtn");
const resetBtn = document.querySelector(".resetBtn");
const results = document.querySelector("#results");
const resultsFromLocalStorage = localStorage.getItem('results');

let startTime;
let timerInterval = 0;
let elapsedTime = 0;
let savedResults = resultsFromLocalStorage === null ? [] : JSON.parse(resultsFromLocalStorage);
let isPaused = false;
let keyValue = document.querySelector('.key-value');
savedResults = [];
keyValue = '';

print(timeToString(elapsedTime));
printResults();

// shows time as a string

function timeToString(time){
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

// events

startBtn.addEventListener('click', start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
nextBtn.addEventListener("click", next);
stopBtn.addEventListener("click", stop);
saveBtn.addEventListener("click", save);

// functions

function print(text) {
  timer.innerHTML = text;
};
 
function printResults() {
  results.innerHTML = '';
  const html = savedResults.map(result => {
    return  `<div><span class="second-timer text-xl mt-8 font-bold font-sans text-indigo-600">${timeToString(result)}</span></div>`
  }).join('');
  results.innerHTML = html
};

function start() {
  if (isPaused) {
    isPaused = false;
  } else {
    elapsedTime = 0;
  };
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(printTime, 10);
  stopBtn.classList.toggle("hidden");
};

function printTime() {
  elapsedTime = Date.now() - startTime;
  print(timeToString(elapsedTime))
};

function pause() {
   if (isPaused) {
     start()
     return;
   }
   isPaused = true;
   clearInterval(timerInterval);
};

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elasedTime = 0;
  savedResults = [];
  localStorage.removeItem('results');
  printResults();
};
  
function next() {
  savedResults.push(elapsedTime);
  printResults();
};

function stop() {
  clearInterval(timerInterval);
  saveBtn.classList.toggle("hidden");
};

function save() {
  localStorage.setItem('results', JSON.stringify(savedResults));
  clearInterval(timerInterval);
  print("00:00:00");
  elasedTime = 0;
  savedResults = [];
  printResults();
};