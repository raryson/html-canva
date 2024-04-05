let alturaRetangulo = 0
let larguraRetangulo = 0
let posicaoInicial = 10
let raioCirculo = 0
let alturaTriangulo = 0
let larguraTriangulo = 0
const ctxElement = document.querySelector("#canva")
const ctx = ctxElement.getContext("2d")

function desenhaRetangulo() {
    alturaRetangulo = document.querySelector("#retangulo-altura").value
    larguraRetangulo = document.querySelector("#retangulo-largura").value
    document.querySelector("#retangulo-altura").value = ""
    document.querySelector("#retangulo-largura").value = ""
    ctx.fillStyle = 'red'
    ctx.fillRect(posicaoInicial, posicaoInicial, larguraRetangulo, alturaRetangulo)
}

function desenhaCirculo() {
    raioCirculo = document.querySelector("#circulo-raio").value
    document.querySelector("#circulo-raio").value = ""
    ctx.beginPath()
    ctx.arc(posicaoInicial, posicaoInicial, raioCirculo, 0, 2 * Math.PI, false)
    ctx.stroke()
    ctx.fillStyle = 'blue'
    ctx.fill()
}

function desenhaTriangulo() {
    alturaTriangulo = Number(document.querySelector("#triangulo-altura").value) + posicaoInicial
    document.querySelector("#triangulo-altura").value = ""
    larguraTriangulo = Number(document.querySelector("#triangulo-largura").value) + posicaoInicial
    console.log(alturaTriangulo, larguraTriangulo)
    document.querySelector("#triangulo-largura").value = ""
    ctx.moveTo(posicaoInicial, posicaoInicial);
    ctx.lineTo(posicaoInicial, larguraTriangulo);
    ctx.stroke()
    ctx.lineTo(larguraTriangulo, alturaTriangulo);
    ctx.stroke()
    ctx.closePath()
    ctx.stroke()

}