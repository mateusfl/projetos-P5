var comprimento1 = 100
var comprimento2 = 50
var angulo1 = 0
var angulo2 = 0
var historico = []
var slider1
var slider2

function setup() {
  createCanvas(600, 600);
  slider1 = createSlider(0, 0.3, 0.001, 0.001)
  slider2 = createSlider(0, 0.3, 0.001, 0.001)
}

function draw() {
  background(250);
  translate(300, 300)
  fill(0)
  
  let x1 = comprimento1 * sin(angulo1)
  let y1 = comprimento1 * cos(angulo1)

  line(0, 0, x1, y1)
  ellipse(x1, y1, 15, 15)

  let x2 = x1 + (comprimento2 * sin(angulo2))
  let y2 = y1 + (comprimento2 * cos(angulo2))
  
  let vetor = createVector(x2, y2)
  if(historico.length > 450){
    historico.splice(0, 1)
  }
  historico.push(vetor)
  
  line(x1, y1, x2, y2)
  ellipse(x2, y2, 15, 15)
  point(x2, y2)
  
  let inc1 = slider1.value()
  let inc2 = slider2.value()

  show(historico)
  angulo1 += inc1
  angulo2 -= inc2
}

function show (historico){
  if (historico.length > 1) {
    for (let i = 1; i < historico.length; i++) {
      let pAtual = historico[i]
      let pAnterior = historico[i - 1]
      line(pAtual.x, pAtual.y, pAnterior.x, pAnterior.y)
    }
  }
}
