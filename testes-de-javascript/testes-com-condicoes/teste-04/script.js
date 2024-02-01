let button = document.querySelector('input#butao');

function verificar() { 
  let pais = document.querySelector('select#pais').value,
    res = document.querySelector('div#res');
    
  if (pais == 'brasil') {
    res.innerHTML = '<p>Você é <strong>brasileiro!</strong>'
  } else {
    res.innerHTML = '<p>Você é <strong>estrangeiro!</strong>'
  }
}

button.addEventListener('click', verificar)
