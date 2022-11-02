// window.addEventListener('keydown',)
var intervalID;
function playSound(e) {
        console.log(e)
        const audio = this.document.querySelector(`audio[data-key="${e.key}"]`)
        const key = this.document.querySelector(`.key[data-key="${e.key}"]`)
        console.log(key)
        if(!audio) return;
        audio.currentTime = 0 
        audio.play()
        key.classList.add('playing')
    
}
function bass(e) {
    // const audio = this.document.querySelector(`audio[data-key="g"]`)
    // const key = this.document.querySelector(`.key[data-key="g"]`)
    const audio = this.document.querySelector(`audio[data-key="g"]`)
    const key = this.document.querySelector(`.key[data-key="g"]`)
    intervalID = setInterval(() => {
        key.classList.add('playing')
        if(!audio) return;
    audio.currentTime = 0 
    audio.play()
    }, 500);
    
}
// window.addEventListener('keydown',)
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    console.log(e.propertyName)
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key =>  key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', (e) => {
     if (e.key == '1') {
        bass(e)
     } else if (e.key == " ") {
        clearInterval(intervalID)
    } else playSound(e)
})  