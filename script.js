function playSound (e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    const key = document.querySelector('.drums__btn[data-key="' + e.keyCode + '"]');
    
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
}

function onTransitionEnd (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('active');
}

window.addEventListener('keydown', playSound);
document.addEventListener('mousedown', function (e) {
    const keyCode = e.srcElement.parentNode.dataset.key;
    const audio = document.querySelector('audio[data-key="' + keyCode + '"]');
    const key = document.querySelector('.drums__btn[data-key="' + keyCode + '"]');
    
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
});
const keys = document.querySelectorAll('.drums__btn');
keys.forEach(key => key.addEventListener('transitionend', onTransitionEnd));