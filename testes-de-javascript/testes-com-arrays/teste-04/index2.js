const cores = ["vermelho", "azul", "laranja", "verde", "rosa"];
cores.forEach(loopFunction2)

function loopFunction2(value) {
  document.getElementById('list').innerHTML += `<li>${value}</li>`
}
