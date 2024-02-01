function load() {
  let output = document.getElementById('output'),
  img = document.getElementById('imgcircle'),
  hour = new Date().getHours();

  output.innerHTML = `Agora são ${hour} horas`
  
  if (hour >= 5 && hour < 12)  {
  // BOM DIA!
  output.innerHTML = 'Bom dia!'
  img.src = 'photos/morning.jpg'
  document.body.style.background = 'hsl(150, 50%, 70%)'
  } else if (hour >= 12 && hour < 18) {
  // BOA TARDE! 
  output.innerHTML = 'Boa tarde!'
  img.src = 'photos/evening.jpg'
  document.body.style.background = 'hsl(50, 100%, 43%)'
  } else if (hour >= 18 && hour < 24) {
  // BOA NOITE!
  output.innerHTML = 'Boa noite!'
  img.src = 'photos/night.jpg'
  document.body.style.background = 'rgba(0, 0, 0, 0.85)'
  } else {
  // BOA MADRUGADA!
  output.innerHTML = 'Boa madrugada!'
  img.src = 'photos/night.jpg'
  document.body.style.background = 'rgba(0, 0, 0, 0.95)'
  }
}
