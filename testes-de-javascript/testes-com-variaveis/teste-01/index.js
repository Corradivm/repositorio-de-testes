let x = 1;
console.log(`O x foi declarado como variável global de valor ${x}`)

function verifyX() {
  console.log(`Como x é variável global e se mantém como ${x}, mesmo que ele tenha sido declarado com valor 1. Isso acontece pois como x é global então seu valor pode ser modificado por qualquer função e continuará com o valor modificado mesmo após o fim da execução da função.`)
}

function changeX() {
  x += 1
  console.log(`Agora x recebe 1 como incremento através de uma função chamada durante o carregamento da página e vale ${x}`)
}

function changeX2() {
  x += 1
  console.log(x)
}
