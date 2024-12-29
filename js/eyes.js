const eyes = document.querySelectorAll(".eye")
const eyeballs = document.querySelectorAll(".eyeball")
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    eyes.forEach(eye =>{
        const rekt = eye.getBoundingClientRect()
        const eyeX = rekt.left + rekt.width/2
        const eyeY = rekt.top + rekt.height/2
        const angleDeg = angle(mouseX, mouseY, eyeX, eyeY)

        eyeballs.forEach(eyeball => {
            if (eyeball.classList.contains(eye.classList[1])){
                eyeball.style.transform = `rotate(${90 + angleDeg}deg)`
            }
        });
    })
})

function angle(cx, cy, ex, ey){
    const dy = ey-cy
    const dx = ex-cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}

var amount = 35

eyes.forEach(eye =>{
    eyeballs.forEach(eyeball => {
        if (eyeball.classList.contains(eye.classList[1])){
            eye.onclick = function(){
                if (eyeball.src.indexOf("media/images/eyeball.png")!=-1){
                    eyeball.src = "media/images/eyegone.png"
                    eye.style.cursor = "url(media/images/godscursor.png), none"
                    new Audio("media/audio/eyepop.mp3").play()
                    amount -= 1
                }
            }
        }
    })
})

function leave(){
    window.location.href = "ladybug"
}

function check(){
    if (amount == 0){
        amount = -1
        setTimeout(leave, 1000)
    }
}

function start(){
    setInterval(check, 1)
}

window.onload = start