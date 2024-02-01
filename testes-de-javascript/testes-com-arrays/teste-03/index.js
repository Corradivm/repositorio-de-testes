let array = [1, 2, 3, 5, 4, 6, 9, 7, 8, 0]

for (let pos in array) {
  console.log(`A posição ${pos} tem como valor ${array[pos]}`)
}

let position = array.indexOf(10)

if (position == -1) {
  console.log('O valor não existe na variável')
} else {
  console.log(`A posição é ${position}`)
}
