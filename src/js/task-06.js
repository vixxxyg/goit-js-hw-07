const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

const requiredLength = Number(inputRef.dataset.length);

function onInputBlur(event) {
  const target = event.currentTarget;
  if (target.value.length === requiredLength) {
      target.classList.add('valid');
      target.classList.remove('invalid');
  } else {
      target.classList.add('invalid');
      target.classList.remove('valid');
    }
}