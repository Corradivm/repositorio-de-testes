function verification() {
  let byear = Number(document.getElementById('number').value),
  gen = document.getElementsByName('radsex'),
  year = new Date().getFullYear(),
  output = document.querySelector('div#output'),
  img = document.querySelector('img#img');

  if(byear <= year - 120 || byear >= year) {
    window.alert('[ERRO] Insira um ano válido!')
    return 0;
  } else {
    if (gen[0].checked) {
      gen = 'masculino'
    } else {
      gen = 'feminino'
    }
  }

    const age = year - byear;

    if (age < 12) {
      // Criança
      output.innerHTML = `Você é uma criança com ${age} anos!`
      switch(gen) {
        case 'feminino':
          output.innerHTML = `Você é uma adolescente com ${age} anos!`
          img.src = 'fotos/menina.jpg'
          break
        case 'masculino':
          output.innerHTML = `Você é um adolescente com ${age} anos!`
          img.src = 'fotos/menino.jpg'
          break
        default:
          break
      }
    } else if (age < 18) {
      // Adolescente
      switch(gen) {
        case 'feminino':
          output.innerHTML = `Você é uma garota com ${age} anos!`
          img.src = 'fotos/garota.jpg'
          break
        case 'masculino':
          img.src = 'fotos/garoto.jpg'
          output.innerHTML = `Você é um garoto com ${age} anos!`
          break
        default:
          break
      }
    } else if(age < 60) {
      // Adulto
      if (age < 40) {
        switch(gen) {
          case 'feminino':
            output.innerHTML = `Você é uma adulta com ${age} anos!`
            img.src = 'fotos/mulher.jpg'
            break
          case 'masculino':
            output.innerHTML = `Você é um adulto com ${age} anos!`
            img.src = 'fotos/homem.jpg'
            break
            default:
            break
        }
        } else {
          switch(gen) {
            case 'feminino':
              output.innerHTML = `Você é uma adulta com ${age} anos!`
              img.src = 'fotos/mulherm.jpg'
              break
            case 'masculino':
              output.innerHTML = `Você é um adulto com ${age} anos!`
              img.src = 'fotos/homemm.jpg'
              break
          }
     }
    }  else {
      // Idoso
        switch(gen) {
          case 'feminino':
            output.innerHTML = `Você é uma idosa com ${age} anos!`
            img.src = 'fotos/senhora.jpg'
            break
          case 'masculino':
            output.innerHTML = `Você é um idoso com ${age} anos!`
            img.src = 'fotos/senhor.jpg'
            break
            default:
            break
        }
    }
}
