const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector('#value').textContent,
};

let counterValue = 0;

refs.increment.addEventListener('click', () => {
  counterValue++;
  document.querySelector('#value').textContent = counterValue;
});

refs.decrement.addEventListener('click', () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
});