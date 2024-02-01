function gerar() {
  nbrt = document.getElementById('number').value
  
  if (nbrt.length == 0) {
    alert('Insira um valo!')
    return 0;
  }
  
  nbr = Number(nbrt)
  res = document.getElementById('tab')
  
  res.innerHTML = ''
  
  for (let x = 0;x <= 10;x++) {
    res.innerHTML += `<option>${nbr} x ${x} = ${nbr*x}</option>`
  }
}
