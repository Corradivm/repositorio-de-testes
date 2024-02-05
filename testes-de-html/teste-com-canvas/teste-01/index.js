const canvas = document.getElementById('main-canvas')
const ctx = canvas.getContext("2d")

ctx.fillStyle = 'red'

ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(700, 350)
ctx.stroke()