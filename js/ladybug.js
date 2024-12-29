firefox = navigator.userAgent.toLowerCase().includes('firefox')

guts = document.getElementById("guts")
ladybug = document.getElementById("ladybug")
heartdiv = document.getElementById("heartdiv")
kidneydiv = document.getElementById("kidneydiv")
stomachdiv = document.getElementById("stomachdiv")
trash = document.getElementById("trash")

slurpsound = new Audio("media/audio/crawling.mp3")
slurpsound.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
  });


amount = 3

function ladybugclick(){
    if (amount == 3){
        ladybug.src = "media/images/ladybugopen.png"
        ladybug.style.cursor = "url(media/images/godscursor.png), none"
        ladybug.onclick = ""
        heartdiv.style.zIndex = 10
        kidneydiv.style.zIndex = 9
        stomachdiv.style.zIndex = 8
        slurpsound.play()
    }
    else{
        ladybug.src = "media/images/ladybugkawaii.png"
        ladybug.style.cursor = "url(media/images/godscursor.png), none"
        ladybug.onclick = ""
        guts.remove()
        slurpsound.currentTime = 0
        slurpsound.pause();
        slurpsound.currentTime = 0;
        ladybug.setAttribute("draggable", true);
    }
}

dragged = null

heartdiv.addEventListener("dragstart", function(event){
    dragged = event.target
})

heartdiv.addEventListener("dragend", function(event){
    dragged = null
})

kidneydiv.addEventListener("dragstart", function(event){
    dragged = event.target
})

kidneydiv.addEventListener("dragend", function(event){
    dragged = null
})

stomachdiv.addEventListener("dragstart", function(event){
    dragged = event.target
})

stomachdiv.addEventListener("dragend", function(event){
    dragged = null
})

ladybug.addEventListener("dragstart", function(event){
    dragged = event.target
})

ladybug.addEventListener("dragend", function(event){
    dragged = null
})

trash.addEventListener("dragover", function(event){
    event.preventDefault()
})

trash.addEventListener("drop", function(event){
    dragged.remove()
    if (dragged == ladybug){
        setTimeout(jumpscare, 1000)
    }
    dragged = null
    amount -= 1
    if (amount == 0){
        ladybug.onclick=ladybugclick
        ladybug.style.cursor = "url(media/images/godscursorclicker.png), none"
    }
})

text1 = document.getElementById("text1")
text2 = document.getElementById("text2")

function leave(){
    window.location.href = "5392"
}

function jumpscare(){
    if (!firefox){
        document.documentElement.requestFullscreen()
    }
    trash.remove()
    document.querySelector("html").style.cursor = "none"
    document.querySelector("html").style.backgroundImage = "none"

    eisus = document.createElement("img")
    eisus.id = "eisus"
    eisus.src = "media/images/eisus.png"
    eisus.style.position = "absolute";
    eisus.style.top = "50%";
    eisus.style.left = "50%";
    eisus.style.transform = "translate(-50%, -50%)";
    eisus.style.width = "500px";
    setInterval(blinkon, 40)
    document.body.appendChild(eisus)
    text1.innerHTML = "IT HURTS"
    new Audio('media/audio/eisus.mp3').play();
    text1.innerHTML = "IT HURTS"
    text2.innerHTML = "HE DID THIS"
    setTimeout(leave, 1000)
}

function blinkoff(){
    document.querySelector("html").style.backgroundColor = "red";
    text1.style.color = "black"
    text2.style.color = "black"
    setInterval(blinkon, 30)
}
  
function blinkon(){
    document.querySelector("html").style.backgroundColor = "black"
    text1.style.color = "white"
    text2.style.color = "white"
    setInterval(blinkoff, 30)
}