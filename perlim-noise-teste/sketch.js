var x = 0
var y = 0
var passo = 0.01

var xoff1 = 0
var xoff2 = 1000

var particula

class Particula {
  constructor(x, y, passo) {
    this.x = x
    this.y = y
    this.passo = passo
    this.historico = []

    this.update = function () {
      this.x = map(noise(xoff1), 0, 1, 0, width)
      this.y = map(noise(xoff2), 0, 1, 0, height)
      xoff1 += this.passo
      xoff2 += this.passo

      this.vetor = createVector(this.x, this.y)
      this.historico.push(this.vetor)
    }

    this.show = function () {
      ellipse(this.x, this.y, 24, 24)

      this.historico.forEach((element) => {
        strokeWeight(2)
        point(element.x, element.y)
      })
    }
  }
}

function setup() {
  createCanvas(500, 500)
  particula = new Particula(x, y, passo)
}

function draw() {
  background(220)
  particula.update()
  particula.show()
}
