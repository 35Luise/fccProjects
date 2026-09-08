const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const audios = document.querySelectorAll('.clip');

drumPads.forEach(drumPad => {
  drumPad.addEventListener('click', () => {
    const audio = drumPad.querySelector('audio');
    if (audio) {
      audio.play();
      const drumPad = audio.parentElement;
      display.innerText = drumPad.id;
    }
  });
});

document.addEventListener("keydown", event => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    audio.play();
    const drumPad = audio.parentElement;
    display.innerText = drumPad.id;
  }
});