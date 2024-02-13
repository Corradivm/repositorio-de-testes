window.addEventListener('keydown', e => {
  const key = e.key;
  const regExp = /[1234567890*+-/]/i
  
  if(!key.match(regExp) || key.length != 1) {
    console.log('Erro!')
    return;
  }

  console.log(key.match(regExp).toString())
})
