document.addEventListener('DOMContentLoaded', function () {

  function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    // console.log(e.propertyName);
    this.classList.remove('playing');
  }

  var keys = document.querySelectorAll('.key');
  for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
  }
  window.addEventListener('keydown', playSound);
})
