let bgtransformx = 0
let bgtransformy = 0
let rotation = 0

function backzoom(){
    bgtransformx += .04
    bgtransformy += .03
    rotation += .005
    document.getElementById("stars").style.backgroundPosition = (bgtransformx.toString() + " " + bgtransformy.toString())
    document.getElementById("stars").style.transform = "rotate(" + rotation.toString() + "deg)";
}

function start(){
    setInterval(backzoom, 1)
}

window.onload = start