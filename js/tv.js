tv = document.getElementById("tv")
screen = document.getElementById("screen")
freq = document.getElementById("frequency")
staticsound = new Audio("media/audio/static.mp3")
deepdrone = new Audio("media/audio/deepdrone.mp3")
tv2 = new Audio("media/audio/tv2.mp3")

staticsound.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

deepdrone.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

tv2.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});


function tvclick(){
    tv.src = "media/images/tv.png"
    tv.style.cursor = "url(media/images/godscursor.png), none"
    freq.style.display = "inline"
    staticsound.play()
    deepdrone.play()
    deepdrone.volume = 0
    tv2.play();
    tv2.volume = 0
}

freq.addEventListener('input', function (evt) {
    freqval = this.value

    if (freqval < 25) {
        if (screen.src != window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + "media/videos/tv1.mp4"){
            screen.src = "media/videos/tv1.mp4"
        }

    }
    if (freqval > 25 && freqval < 75) {
        if (screen.src != window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + "media/videos/tv2.mp4"){
            screen.src = "media/videos/tv2.mp4"
        }

    }
    if (freqval > 75) {
        if (screen.src != window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + "media/videos/tv3.mp4"){
            screen.src = "media/videos/tv3.mp4"
        }

    }

    if (freqval == 10){
        screen.style.opacity = 0.25
        staticsound.volume = 0.75
        deepdrone.volume = 0.25
    }
    else if (freqval == 11){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        deepdrone.volume = 0.50
    }
    else if (freqval == 12){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        deepdrone.volume = 0.75
    }
    else if (freqval == 13){
        screen.style.opacity = 1
        staticsound.volume = 0
        deepdrone.volume = 1
    }
    else if (freqval == 14){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        deepdrone.volume = 0.75
    }
    else if (freqval == 15){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        deepdrone.volume = 0.50
    }
    else if (freqval == 16){
        screen.style.opacity = 0.26
        staticsound.volume = 0.75
        deepdrone.volume = 0.25
    }


    
    else if (freqval == 50){
        screen.style.opacity = 0.25
        staticsound.volume = 0.75
        tv2.volume = 0.25
    }
    else if (freqval == 51){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        tv2.volume = 0.50
    }
    else if (freqval == 52){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        tv2.volume = 0.75
    }
    else if (freqval == 53){
        screen.style.opacity = 1
        staticsound.volume = 0
        tv2.volume = 1
    }
    else if (freqval == 54){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        tv2.volume = 0.75
    }
    else if (freqval == 55){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        tv2.volume = 0.50
    }
    else if (freqval == 56){
        screen.style.opacity = 0.26
        staticsound.volume = 0.75
        tv2.volume = 0.25
    }



    else if (freqval == 90){
        screen.style.opacity = 0.25
        staticsound.volume = 0.75
        deepdrone.volume = 0.25
    }
    else if (freqval == 91){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        deepdrone.volume = 0.50
    }
    else if (freqval == 92){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        deepdrone.volume = 0.75
    }
    else if (freqval == 93){
        screen.style.opacity = 1
        staticsound.volume = 0
        deepdrone.volume = 1
    }
    else if (freqval == 94){
        screen.style.opacity = 0.75
        staticsound.volume = 0.25
        deepdrone.volume = 0.75
    }
    else if (freqval == 95){
        screen.style.opacity = 0.50
        staticsound.volume = 0.50
        deepdrone.volume = 0.50
    }
    else if (freqval == 96){
        screen.style.opacity = 0.26
        staticsound.volume = 0.75
        deepdrone.volume = 0.25
    }


    
    else{
        screen.style.opacity = 0
        staticsound.volume = 1
        deepdrone.volume = 0
        tv2.volume = 0
    }
});