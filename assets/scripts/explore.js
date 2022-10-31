// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  const input = document.querySelector('textarea');
  const image = document.querySelector('main img');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  
  function populateVoiceList() {
    voices = synth.getVoices();

    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.onclick = function() {
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    
    utterThis.addEventListener('start', function() {
      image.src = 'assets/images/smiling-open.png';
    });
    
    utterThis.addEventListener('end', function() {
      image.src = 'assets/images/smiling.png';
    });
    
  }
}