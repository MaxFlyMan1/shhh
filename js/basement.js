basement = document.getElementById("basement")
clickyy = document.getElementById("clicky")
music = new Audio("media/audio/basement.mp3");
music.addEventListener('timeupdate', function(){
  var buffer = .44
  if(this.currentTime > this.duration - buffer){
      this.currentTime = 0
      this.play()
  }
});

function clicky(){
    basement.src = "media/images/basement2.png"
    clickyy.remove()
    music.play()
}