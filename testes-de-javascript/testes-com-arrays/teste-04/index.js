const cores = ["vermelho", "azul", "laranja", "verde", "rosa"]
let size = cores.length

function loopFunction() {
  const list = document.getElementById('list')

  for (let c = 0; c < size; c++) {
    list.innerHTML += `<li>${cores[c]}</li>`
  }
}
