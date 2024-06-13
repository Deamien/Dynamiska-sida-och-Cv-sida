let isYellowBackground = false; //  Tracks background color state

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.textContent.includes('©')) {
      isYellowBackground = !isYellowBackground; // Toggle state on click

      document.body.style.backgroundColor = isYellowBackground ? 'yellow' : 'white';
    }
  });
});

let codeSequence = '';
const secretCode = '1337';

document.addEventListener('keydown', (event) => {
  codeSequence += event.key;
  if (codeSequence.includes(secretCode)) {
    codeSequence = '';

    window.openmodal();
  }
});