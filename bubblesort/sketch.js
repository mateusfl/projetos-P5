var alturas = []
var i = 0

function setup() {
  createCanvas(640, 400)
  
  //preenche a lista de alturas aleatórias
  for (let i = 0; i < width; i++) {
    let altura = random(height)
    alturas.push(altura)
  }
}

function draw() {
  if (i < alturas.length) {
    //a função draw só vai renderizar um novo quadro ao final de cada passe pela lista
    for (var j = 0; j < alturas.length - i - 1; j++) {
      if (alturas[j] < alturas[j + 1]) {
        let temp
        temp = alturas[j]
        alturas[j] = alturas[j + 1]
        alturas[j + 1] = temp
      }
    }
    i++
  } else {
    noLoop()
  }

  background(0)
  for (let i = 0; i < alturas.length; i++) {
    stroke(255)
    line(i, height, i, alturas[i])
  }
}
