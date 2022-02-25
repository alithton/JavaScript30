function playAudio(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    highlightKey(event);   
}

function highlightKey(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('playing'); 
}

function removeHighlight(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
window.addEventListener('keydown', playAudio);