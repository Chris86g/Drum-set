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

  var keyBass = document.querySelector('.bass');
  function playBassOnMob(e) {
    var audioBass = document.getElementById('bass');
    console.log(audioBass);
    console.log(keyBass);
    audioBass.currentTime = 0;
    audioBass.play();
    keyBass.classList.add('playing');
  }
  keyBass.addEventListener('click', playBassOnMob);

  var keySnare = document.querySelector('.snare');
  function playSnareOnMob(e) {
    var audioSnare = document.getElementById('snare');
    console.log(audioSnare);
    console.log(keySnare);
    audioSnare.currentTime = 0;
    audioSnare.play();
    keySnare.classList.add('playing');
  }
  keySnare.addEventListener('click', playSnareOnMob);

  var keyDrum = document.querySelector('.drum');
  function playDrumOnMob(e) {
    var audioDrum = document.getElementById('drum');
    console.log(audioDrum);
    console.log(keyDrum);
    audioDrum.currentTime = 0;
    audioDrum.play();
    keyDrum.classList.add('playing');
  }
  keyDrum.addEventListener('click', playDrumOnMob);

  var keyTom = document.querySelector('.tom');
  function playTomOnMob(e) {
    var audioTom = document.getElementById('tom');
    console.log(audioTom);
    console.log(keyTom);
    audioTom.currentTime = 0;
    audioTom.play();
    keyTom.classList.add('playing');
  }
  keyTom.addEventListener('click', playTomOnMob);

  var keyBongo = document.querySelector('.bongo');
  function playBongoOnMob(e) {
    var audioBongo = document.getElementById('bongo');
    console.log(audioBongo);
    console.log(keyBongo);
    audioBongo.currentTime = 0;
    audioBongo.play();
    keyBongo.classList.add('playing');
  }
  keyBongo.addEventListener('click', playBongoOnMob);

  var keyTimbal = document.querySelector('.timbal');
  function playTimbalOnMob(e) {
    var audioTimbal = document.getElementById('timbal');
    console.log(audioTimbal);
    console.log(keyTimbal);
    audioTimbal.currentTime = 0;
    audioTimbal.play();
    keyTimbal.classList.add('playing');
  }
  keyTimbal.addEventListener('click', playTimbalOnMob);

  var keyTape = document.querySelector('.tape');
  function playTapeOnMob(e) {
    var audioTape = document.getElementById('tape');
    console.log(audioTape);
    console.log(keyTape);
    audioTape.currentTime = 0;
    audioTape.play();
    keyTape.classList.add('playing');
  }
  keyTape.addEventListener('click', playTapeOnMob);

  var keyCabasa = document.querySelector('.cabasa');
  function playCabasaOnMob(e) {
    var audioCabasa = document.getElementById('cabasa');
    console.log(audioCabasa);
    console.log(keyCabasa);
    audioCabasa.currentTime = 0;
    audioCabasa.play();
    keyCabasa.classList.add('playing');
  }
  keyCabasa.addEventListener('click', playCabasaOnMob);

  var keyVibra = document.querySelector('.vibra');
  function playVibraOnMob(e) {
    var audioVibra = document.getElementById('vibra');
    console.log(audioVibra);
    console.log(keyVibra);
    audioVibra.currentTime = 0;
    audioVibra.play();
    keyVibra.classList.add('playing');
  }
  keyVibra.addEventListener('click', playVibraOnMob);
})
