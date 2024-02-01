function count() {
  let str = document.getElementById('start');
  let end = document.getElementById('end');
  let step = document.getElementById('step');
  let res = document.getElementById('res');
  
  if (str.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
    window.alert('Por favor, certifique-se de inserir todos os valores!')
  } else {
    res.innerHTML = 'Contando... '
    let i = Number(str.value);
    let f = Number(end.value);
    let p = Number(step.value);
    
    if (p == 0) {
      window.alert('Passo inválido!')
      return 0;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} &rarr; `
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} &rarr; ` 
      }
    }
    res.innerHTML += 'Fim!'
  }
}
