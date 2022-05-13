var origem
var peso
var angulo

var len = 150
var g = 0.5
var atrito = 0
var velAngular = 0
var fRestauradora

function setup() {
  createCanvas(500, 500)
  origem = createVector(250, 150)
  peso = createVector()
  angulo = PI / 4
  sliderAtrito = createSlider(0, 0.1, 0.002, 0.001)
  sliderAcl = createSlider(0, 0.003, 0, 0.0001)
}

function draw() {
  background(220)

  fRestauradora = (-1 * g * sin(angulo)) / len
  fRestauradora += sliderAcl.value()

  velAngular += fRestauradora
  angulo += velAngular
  atrito = sliderAtrito.value()

  velAngular /= 1 + atrito

  peso.x = sin(angulo) * len + origem.x
  peso.y = cos(angulo) * len + origem.y

  line(origem.x, origem.y, peso.x, peso.y)
  ellipse(peso.x, peso.y, 20, 20)
}
