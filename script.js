let alturaRetangulo = 0
let larguraRetangulo = 0
let posicaoInicial = 0
let raioCirculo = 0
let alturaTriangulo = 0
let larguraTriangulo = 0
let angulo = 0
var cor 
var grad1
var grad2
const ctxElement = document.querySelector("#canva")
const ctx = ctxElement.getContext("2d")

function DesenhaInicio() {
    ctx.reset()
    posicaoInicial = document.querySelector("#ponto-inicial").value
    document.querySelector("#ponto-inicial").value = ""
}

function rotacaoforma() {
    ctx.reset()
    angulo = parseInt(document.querySelector("#rotacionar").value)
    document.querySelector("#rotacionar").value = ""
    const formaSelecionada = document.querySelector('#select-rotacao').value
    switch (formaSelecionada) {
        case 'retangulo': {
            desenhaRetangulo(angulo)
            return
        }
        case 'triangulo': {
            desenhaTriangulo(angulo)
            return
        }
        case 'circulo': {
            desenhaCirculo(angulo)
            return
        }
    }
}


function PintarForma() {
    cor = document.querySelector("#Color").value
    document.querySelector("#Color").value = ""
    ctx.fillStyle = cor
    ctx.fill()
}

function GradPintar() {
    grad1 = document.querySelector("#ColorGrad1").value
    document.querySelector("#ColorGrad1").value = ""
    grad2 = document.querySelector("#ColorGrad2").value
    document.querySelector("#ColorGrad2").value = ""

    
    var grd = ctx.createRadialGradient(55, 35, 10, 65, 45, 60 );

    grd.addColorStop(0, grad1)
    grd.addColorStop(1, grad2)
    
    
    ctx.fillStyle = grd
    ctx.fill()
}

function desenhaRetangulo(angulo = 0, escala = 0, mover = 0) {
    if (angulo != 0) {
        rotacaoPuraLogica()
    } else if ( escala != 0) {
        escalaPuraLogica(escala.x, escala.y)
    }
    else if (mover != 0) {
        ctx.translate(mover.x, mover.y) 
    }
    else {
        alturaRetangulo = document.querySelector("#retangulo-altura").value
        document.querySelector("#retangulo-altura").value = ""
        larguraRetangulo = document.querySelector("#retangulo-largura").value
        document.querySelector("#retangulo-largura").value = ""
    }
    ctx.rect(posicaoInicial, posicaoInicial, larguraRetangulo, alturaRetangulo)
    ctx.stroke()
    ctx.save()
}

function desenhaCirculo(angulo = 0, escala = 0, mover = 0) {
    if (angulo != 0) {
        rotacaoPuraLogica()
    } else if ( escala != 0) {
        escalaPuraLogica(escala.x, escala.y)
    }
    else if (mover != 0) {
        ctx.translate(mover.x, mover.y) 
    }
    else {
        raioCirculo = document.querySelector("#circulo-raio").value
        document.querySelector("#circulo-raio").value = ""
    }
    ctx.beginPath()
    ctx.arc(posicaoInicial, posicaoInicial, raioCirculo, 0, 2 * Math.PI, false)
    ctx.stroke()
    ctx.save()
    
}

function desenhaTriangulo(angulo = 0, escala = 0, mover = 0) {
    if (angulo != 0) {
        rotacaoPuraLogica()
    } else if ( escala != 0) {
        escalaPuraLogica(escala.x, escala.y)
    }
    else if (mover != 0) {
        ctx.translate(mover.x, mover.y) 
    }
    else {
        alturaTriangulo = document.querySelector("#triangulo-altura").value + 0
        document.querySelector("#triangulo-altura").value = ""
        larguraTriangulo = document.querySelector("#triangulo-largura").value + 0
        document.querySelector("#triangulo-largura").value = ""
    }
    ctx.moveTo(posicaoInicial, posicaoInicial);
    ctx.lineTo(posicaoInicial, larguraTriangulo);
    ctx.stroke()
    ctx.lineTo(larguraTriangulo, alturaTriangulo);
    ctx.stroke()
    ctx.closePath()
    ctx.stroke()
}

function rotacaoPuraLogica() {
    ctx.translate(posicaoInicial, posicaoInicial)
    ctx.rotate(angulo * Math.PI / 180)
    ctx.translate(-posicaoInicial, -posicaoInicial)
}

function escalaPuraLogica(x, y) {
    ctx.translate(posicaoInicial, posicaoInicial)
    ctx.scale(x, y)
    ctx.translate(-posicaoInicial, -posicaoInicial)
}

function escalarForma() {
    ctx.reset()
    const escalarX = document.querySelector('#escalar-x').value
    const escalarY = document.querySelector('#escalar-y').value
    const escala = { x: escalarX, y: escalarY }
    document.querySelector('#escalar-y').value = ''
    document.querySelector('#escalar-x').value = ''
    const formaEscala = document.querySelector('#select-escalar').value
    switch (formaEscala) {
        case 'retangulo': {
            desenhaRetangulo(0, escala)
            return
        }
        case 'triangulo': {
            desenhaTriangulo(0, escala)
            return
        }
        case 'circulo': {
            desenhaCirculo(0, escala)
            return
        }
    }
}

function moverFunction() {
    ctx.reset()
    const moverInputX = document.querySelector('#ponto-mover-x').value
    document.querySelector('#ponto-mover-x').value = ""
    const moverInputY = document.querySelector('#ponto-mover-y').value
    document.querySelector('#ponto-mover-y').value = ""
    const formaMovida = document.querySelector('#select-mover').value
    switch (formaMovida) {
        case 'retangulo': {
            desenhaRetangulo(0, 0, {x: moverInputX, y: moverInputY})
            return
        }
        case 'triangulo': {
            desenhaTriangulo(0, 0, {x: moverInputX, y: moverInputY})
            return
        }
        case 'circulo': {
            desenhaCirculo(0, 0, {x: moverInputX, y: moverInputY})
            return
        }
    }
}
