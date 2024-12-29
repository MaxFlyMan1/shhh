chest = document.getElementById("chest")
music = new Audio("media/audio/sunshine.mp3");
music.addEventListener('timeupdate', function(){
  var buffer = .44
  if(this.currentTime > this.duration - buffer){
      this.currentTime = 0
      this.play()
  }
});

function huh(){
    chest.src="media/images/treasurechest2.png"
    chest.style.cursor = "url(media/images/godscursor.png), none"
    new Audio("media/audio/chest.mp3").play()
    setTimeout(key, 2000)
    setTimeout(function(){chest.remove()}, 1500)
}

function key(){
    music.play()
    document.querySelector("html").style.backgroundImage = "url(media/images/sky.jpg)"

    glow = document.createElement("img")
    glow.id="glow"
    glow.src = "media/images/glow.png"
    document.body.appendChild(glow)

    key = document.createElement("img")
    key.id="key"
    key.src = "media/images/key.png"
    key.onclick = givekey
    document.body.appendChild(key)

    rainbow = document.createElement("img")
    rainbow.id="rainbow"
    rainbow.src = "media/images/rainbow.png"
    document.body.appendChild(rainbow)

    smiley1 = document.createElement("img")
    smiley1.id = "smiley1"
    smiley1.src = "media/images/smiley.png"
    document.body.appendChild(smiley1)

    smiley2 = document.createElement("img")
    smiley2.id = "smiley2"
    smiley2.src = "media/images/smiley.png"
    document.body.appendChild(smiley2)

    setTimeout(function(){
        textsel = document.getElementById("texts")

        text1 = document.createElement("marquee")
        text1.id = "text1"
        text1.innerText = "CLICK FOR FREE DOWNLOAD"
        text1.setAttribute("scrollamount", 40)
        textsel.appendChild(text1)

        text2 = document.createElement("marquee")
        text2.id = "text2"
        text2.innerText = "CLICK FOR FREE DOWNLOAD"
        text2.direction = "right"
        text2.setAttribute("scrollamount", 40)
        textsel.appendChild(text2)
    }, 2100)
}

function givekey(){
    fileName = "media/dGhla2V5dG9mcmVlZG9t.data"
    const a = document.createElement('a')
    a.href = fileName
    a.download = "key.data"
    a.click()
}

