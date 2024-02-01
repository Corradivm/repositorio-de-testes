// window.alert('Hello World') // Hello world!!

// window.confirm('Hello World?') // pede a sua confirmação

// window.prompt('Qual é o seu nome?') // pergunta seu nome

// Estes próximos dois scripts são de saída e só podem ser vistos no console do navegador

console.log(`Opa! Bão?`)

console.log('Você acha que esse código funciona? Não importa o que você disse... é ÓBVIO QUE SIM, isso aqui é um console log, se você está lendo isso ele pelo console é porque funciona!')

let a = 2
a = null ** 2

// window.alert(a)

// recebe seu nome e te comprimenta
/*
let nome = window.prompt('Qual é o seu nome?')

window.alert('É um prazer te conhecer ' + nome + "!")
*/

// calcula a exponenciação
/*
let numero = Number(window.prompt('Digite um número:')),
exp = Number(window.prompt('Agora digite um expoente:')),
resultado = numero ** exp

window.alert(`${numero} elevado a ${exp} é igual a ${resultado}`)
*/

let name = window.prompt('Qual é o seu nome?')

document.write(`Olá ${name}! Seu nome tem ${name.length} letras. <br> Seu nome em letras maiúsculas é ${name.toUpperCase()}. <br> Seu nome em letras maiúsculas é ${name.toLowerCase()}`) 
