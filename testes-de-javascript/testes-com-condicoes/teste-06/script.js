// estrutura condicional aninhada //
let res1 = document.querySelector('div.output1'),
res2 = document.querySelector('div.output2'),
min = new Date().getMinutes(),
hour = new Date().getHours();

if (min < 10) {
  if (hour < 12 && hour >= 5) {
    res1.innerHTML = hour + ":0" + min
    res2.innerHTML = 'Bom dia!'
  } else if(hour < 18 && hour >= 12) {
    res1.innerHTML = hour + ":0" + min
    res2.innerHTML = 'Boa tarde!'
  } else if (hour < 24 && hour >= 18) {
    res1.innerHTML = hour + ":0" + min
    res2.innerHTML = 'Boa noite!'
  } else {
    res1.innerHTML = hour + ":0" + min
    res2.innerHTML = 'Boa madrugada!'
  }
} else {
  if (hour < 12 && hour >= 5) {
    res1.innerHTML = hour + ":" + min
    res2.innerHTML = 'Bom dia!'
  } else if(hour < 18 && hour >= 12) {
    res1.innerHTML = hour + ":" + min
    res2.innerHTML = 'Boa tarde!'
  } else if (hour < 24 && hour >= 18) {
    res1.innerHTML = hour + ":" + min
    res2.innerHTML = 'Boa noite!'
  } else {
    res1.innerHTML = hour + ":" + min
    res2.innerHTML = 'Boa madrugada!'
  }
}
