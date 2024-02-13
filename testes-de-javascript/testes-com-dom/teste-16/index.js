function setTime() {
  const now = new Date()
  const hourOutput = document.getElementById('hours')
  const minutOutput = document.getElementById('minutes')
  const secondsOutput = document.getElementById('seconds')
    
  hourOutput.innerHTML = now.getHours().toString().padStart(2, 0)
  minutOutput.innerHTML = now.getMinutes().toString().padStart(2, 0)
  secondsOutput.innerHTML = now.getSeconds().toString().padStart(2, 0)
}

setInterval(setTime, 15)
