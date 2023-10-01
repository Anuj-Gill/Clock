const clock = document.getElementById('clock');


setInterval(() => {
  let date = new Date();
  let currTime = date.toLocaleTimeString();
  clock.innerText = currTime;
  console.log(currTime);
}, 1000);


