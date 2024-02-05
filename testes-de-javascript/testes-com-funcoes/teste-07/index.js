"use strict";
const box = document.querySelector('.box')

function eventFunction(e) {
  const key = e.key;

  if (key == 'w' || key == 'ArrowUp') {
    box.classList.add('jump')

    setTimeout(() => box.classList.remove('jump'), 900)
  } else if (key == 's' || key == 'ArrowDown') {
    box.classList.add('down')

    setTimeout(() => box.classList.remove('down'), 2000)
  } else if (key == 'd' || key == 'ArrowRight') {
    box.classList.add('right')

    setTimeout(() => box.classList.remove('right'), 2000)
  } else if (key == 'a' || key == 'ArrowLeft') {
    box.classList.add('left')

    setTimeout(() => box.classList.remove('left'), 2000)
  }
}

box.addEventListener("click", () => {
  box.classList.add('rotate')
  setTimeout(() => box.classList.remove('rotate'), 5000)
})

document.addEventListener("keydown", eventFunction)

/*
Uma maneira que eu fiz da primeira vez:

document.addEventListener('keydown', () => {
    box.classList.add('jump')

    setTimeout(() => box.classList.remove('jump'), 900)
    return;
  })
*/