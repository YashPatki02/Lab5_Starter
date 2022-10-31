// expose.js
//import JSConfetti from 'js-confetti'


window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById('horn-select');
  let hornAudio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener('change', function() {
    // Set image and audio based on selected value
    // Ex. Car Horn [Value - car-horn]
    let hornImg = document.querySelector('main img');
    hornImg.src = `assets/images/${hornSelect.value}.svg`;
    hornAudio.src = `assets/audio/${hornSelect.value}.mp3`;
  });

  let volume = document.getElementById('volume');
  let button = document.querySelector('button');

  volume.addEventListener('input', function() {
    let volumeValue = volume.value;
    if (volumeValue >= 67) {
      document.querySelector('div img').src = 'assets/icons/volume-level-3.svg';
      hornAudio.volume = volumeValue / 100;
      hornAudio.muted = false;
    } 
    else if (volumeValue > 33) {
      document.querySelector('div img').src = 'assets/icons/volume-level-2.svg';
      hornAudio.volume = volumeValue / 100;
      hornAudio.muted = false;
    }
    else if (volumeValue > 0) {
      document.querySelector('div img').src = 'assets/icons/volume-level-1.svg';
      hornAudio.volume = volumeValue / 100;
      hornAudio.muted = false;
    }
    else {
      document.querySelector('div img').src = 'assets/icons/volume-level-0.svg';
      hornAudio.muted = true;
    }
  });
  
  button.onclick = function() {
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🎉', '🎊', '🎈', '✨', '⚡️'],
        confettiNumber: 500,
        confettiRadius: 10,
        emojiSize: 50,
      });
    }
    hornAudio.play();
  }
}