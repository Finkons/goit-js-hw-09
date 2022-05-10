refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

const { body, startButton, stopButton } = refs;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = 0;
stopButton.setAttribute('disabled', 'disablet');

startButton.addEventListener('click', () => {
  onClickStartButton();
  startButton.setAttribute('disabled', 'disablet');
  stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
  onClickStopButton();
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', 'disablet');
});


function onClickStartButton() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function onClickStopButton() {
  clearInterval(intervalId);
};
