function soma(n1, n2=0) {
  if (n1 == undefined) {
    return console.log('[ERRO] Certifique-se de especificar ao menos um valor!')
  } else {
    return n1 + n2;
  }
}

console.log(soma(1))
