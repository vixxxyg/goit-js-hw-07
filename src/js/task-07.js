const inputText = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = inputText.value + 'px';

inputText.addEventListener('input', event => {
  spanText.style.fontSize = event.currentTarget.value + 'px';
});