console.clear();
/** 
	Variables.
*/
const utterance = new SpeechSynthesisUtterance();
const volume = document.getElementById('vol');
const rate = document.getElementById('rate');
const volPlace = document.getElementById('vol-place');
const ratePlace = document.getElementById('rate-place');
const lang = document.getElementById('lang');

/** 
 	Standard setup and startup.
*/
utterance.rate = 1;
utterance.volume = 0.5;
volPlace.innerText = utterance.volume*100+'%';
ratePlace.innerText = utterance.rate+'x';

/**
	Functionalities.
*/
// Start talking.
function speak() {
  if(speechSynthesis.speaking) return alert('Wait to finish reading!')
  if(lang.value == 'none') return alert('Select a language!');
	if(utterance.text == '') return alert('The text field cannot be empty!');
	
  utterance.lang = lang.value;
	speechSynthesis.speak(utterance);
}

// Stop talking.
function stop() {
  speechSynthesis.cancel();
}

// Set the text to speak.
function setText(event) {
	utterance.text = event.target.innerText;
}

// Set volume.
function setVolume() {
  let vol = document.getElementById('vol').value;
  
  utterance.volume = Number(vol);
  volPlace.innerText = vol*100+'%';
}

// Set rate.
function setRate() {
  let rate = document.getElementById('rate').value;
  
  utterance.rate = Number(rate);
  ratePlace.innerText = rate+'x';
}

/** 
	Performs the functions of defining volume and rate.
*/
volume.addEventListener('change', setVolume);
rate.addEventListener('change', setRate);

console.clear();
console.log('%cTudo aqui fica entre os desenvolvedores!', 'text-align:center;margin-left: 30%;padding: 5% 0;color:yellow;font-family:"Fira Code"; font-size: 20px');
