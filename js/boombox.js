playing = false
song = 1

function play(){
    if (playing == false){
        if (song != 3){
            new Audio("media/audio/cassete.mp3").play()
            document.getElementById("cassete").style.transform = "translate(-55.5%, 30%)"
            setTimeout(playsong, 1000)
            playing = true
            document.getElementById("clickyhere").style.cursor = "url(media/images/godscursor.png), none"
        }
    }
}

he = new Audio("media/audio/he.wav")
price = new Audio("media/audio/price.wav")

function playsong(){
    if (song == 1){
        price.play()
    }
    if (song == 2){
        he.play()
    }
}

price.addEventListener("ended", function(){
    song += 1
    playing = false
    document.getElementById("clickyhere").style.cursor = "url(media/images/godscursorclicker.png), none"
    document.getElementById("cassete").style.transform = "translate(-55.5%, 90%)"
})
yt.addEventListener("ended", function(){
    song += 1
    playing = false
    document.getElementById("cassete").style.transform = "translate(-55.5%, 90%)"
})

window.onload = function(){document.getElementById("cassete").style.transition = ".5s"}