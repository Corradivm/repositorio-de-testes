// condição composta

function verificacao() {
  let vel = Number(document.querySelector('input#nvel').value),
  res = document.querySelector('div#res');
  
  if (vel >= 60.00000000000001) {
    res.innerHTML = '<p>Você está acima da velocidade permitida! <strong>Multado!</strong></p>'
  } else {
    res.innerHTML = '<p>Você está dentro dos limites de segurança, dirija sempre com resposabilidade.</p>'
  }
}
