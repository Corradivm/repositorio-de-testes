// estrutura condicional aninhada //
let res1 = document.querySelector('div.output'),
date = new Date(),
day = date.getDay();

switch (day) {
  case 0:
    res1.innerHTML = 'Domingo'
    break
  case 1:
    res1.innerHTML = 'Segunda-feira'
    break
  case 2:
    res1.innerHTML = 'Terça-feira'
    break
  case 3:
    res1.innerHTML = 'Quarta-feira'
    break
  case 4:
    res1.innerHTML = 'Quinta-feira'
    break
  case 5:
    res1.innerHTML = 'Sexta-feira'
    break
  case 6:
    res1.innerHTML = 'Sábado'
    break
  default: 
    res1.innerHTML = '[ERRO] Dia inválido'
    break
}
