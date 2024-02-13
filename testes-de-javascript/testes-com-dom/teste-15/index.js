const secondsPointer = document.getElementById('seco');
const minutesPointer = document.getElementById('minu');
const hoursPointer = document.getElementById('hour');

function pointers() {
  let i;
  const data = new Date();
  const secondsDeg = ((data.getSeconds() / 60) * 360) + 90;
  const minutesDeg = ((data.getMinutes() / 60) * 360) + 90;
  const hoursDeg = ((data.getHours() / 12) * 360) + 90; 

  if (secondsDeg == 90) {
    for (i = 0;i < 3;i++) {
      document.getElementsByClassName('pointers')[i].style.transition = 'all 0s'
    }
  }

  secondsPointer.style.transform = `rotate(${secondsDeg}deg)`;
  minutesPointer.style.transform = `rotate(${minutesDeg}deg)`;
  hoursPointer.style.transform = `rotate(${hoursDeg}deg)`

  setTimeout(() => {
    for (i = 0;i < 3;i++) {
      document.getElementsByClassName('pointers')[i].style.transition = 'all 0.03s'
    }
  }, 100)
}

setInterval(pointers, 1000)
