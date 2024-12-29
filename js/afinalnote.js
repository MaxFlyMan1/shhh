function opennote(){
    document.getElementById("note").remove()
    new Audio("media/audio/noteflip.mp3").play()

    bgdark = document.createElement("div")
    bgdark.id = "bgdark"
    document.body.appendChild(bgdark)

    noteopened = document.createElement("img")
    noteopened.src = "media/images/noteopen.png"
    noteopened.id = "noteopen"
    document.body.appendChild(noteopened)

    notetext = document.createElement("div")
    notetext.id = "notetext"
    document.body.appendChild(notetext)

    document.getElementById("notetext").innerHTML = '<center>The End <br><br> You did it! You reached the end of this stupid little project! Some may ask "Why?". The answer: I got bored. This is simply a passion project I made out of boredom, and maybe I`ll even get a video made about this lol. So yeah, I hope everyone enjoyed, and goodbye.'
}