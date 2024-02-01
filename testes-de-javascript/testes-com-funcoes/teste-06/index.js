let array = [];

function add() {
  let num = Number(document.getElementById('number').value);
  // Validação e adição de valores
  if (array.indexOf(num) == -1 && num >= 1 && num <= 100)  {
    array.push(num)
    document.getElementById('tab').innerHTML += `<option>Valor ${num} adicionado!</option>`
  } else if (num < 1 || num > 100) {
    window.alert('[ERRO] O valor é inválido! (Deve estar entre 1 e 100)')
  } else {
    window.alert('[ERRO] Este valor já foi adicionado!')
  }
}

function end() {
  // Total de valores inseridos
  let qua = array.length;
  if (qua != 0) {  
    document.getElementById('output').innerHTML = `O total de valores inseridos é ${qua}`
  } else {
    window.alert('Adicione algum valor antes de prosseguir')
  }
  // Maior e menor valor
  let menor = array[0]
  let maior = array[0]
  
  for (let pos in array) {
    if (array[pos] > maior) {
      maior = array[pos]
    } else if (array[pos] < menor) {
      menor = array[pos]
    }
  } 
  document.getElementById('output').innerHTML += `<p>O menor valor é ${menor}</p>`
  document.getElementById('output').innerHTML += `<p>O maior valor é ${maior}</p>`
  // Soma de todos os valores e média
  let sum = 0
  for (let pos in array) {
    sum += array[pos]
  }
  document.getElementById('output').innerHTML += `<p>A soma de todos os valores é ${sum}</p>`
  document.getElementById('output').innerHTML += `<p>A média dos valores inseridos é ${sum / (array.length)}</p>`
}
