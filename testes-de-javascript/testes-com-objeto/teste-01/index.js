let amigo = {
nome: 'José', 
peso: 77.4, 
idade: 5, 
mudar(p=0, i=0) {
  console.log('Mudou!')
  this.peso += p
  this.idade += i
}}

amigo.mudar(-2, 10)

console.log(`Seu nome é ${amigo.nome}, tem ${amigo.idade} anos de idade e com ${amigo.peso}Kg de peso`)
