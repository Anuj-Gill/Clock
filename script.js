const alarms = [];
let counter = -1;
let currHour,currMin;

const form = document.querySelector('.form');
const display = document.querySelector('.displayAlarms');
const alarmTone = document.querySelector('#alarmTone');

const clock = document.getElementById('clock');
setInterval(() => {
  let date = new Date();
  currHour = date.getHours();
  currMin = date.getMinutes();
  let currTime = date.toLocaleTimeString();
  clock.innerText = currTime;
  // console.log(currTime);
}, 1000);


function addAlarm(hourTime,minuTime) {
  alarms.push({hour:hourTime,
              minutes:minuTime});
    counter++;
    const alarmDiv = document.createElement('div');
    alarmDiv.textContent = `Alarm${counter + 1} --> ${hourTime} : ${minuTime}`;
    // const deleteButton = document.createElement('button');
    // deleteButton.contentEditable('Delete');
    display.appendChild(alarmDiv);
    // display.appendChild(deleteButton);

    // console.log(alarms[0].hour) ;
    
}

function checkAlarm() {
  alarms.forEach(e => {
    e.hour = parseInt(e.hour);
    e.minutes = parseInt(e.minutes)
    // console.log(e.hour,e.minutes,currHour,currMin);
    // console.log(e.hour === currHour);
    // console.log(e.minutes === currMin);
    if(e.hour === currHour && e.minutes === currMin){
      console.log('Wake Up');
      soundAlarm();
      console.log('ringing')
    } else {
      alarmTone.pause();
      // console.log('no alarm');
    }
  })

}

function soundAlarm() {
  alarmTone.play();
  console.log('topgun');
}

function deleteAlarm() {

}

form.addEventListener('submit',(e) => {
  e.preventDefault();
  let hour = document.querySelector('.hourSet').value;
  let minu = document.querySelector('.minSet').value;
  // console.log(hour,minu);
  addAlarm(hour,minu);  
});

setInterval(() => {
  checkAlarm();
},1000);




