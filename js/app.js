document.addEventListener('DOMContentLoaded', function () {
  function playSound(e) {
    const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    if (e.propertyName !== transition) return;
    console.log(e.propertyName);
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
})
