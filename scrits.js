
let input = document.querySelector('#input');
let form = document.querySelector('#input-form');
let h2 = document.querySelector('h2');

function checker(event) {
  event.preventDefault();

  let inputLen = input.value.length;
  for (var i = 0; i < inputLen; i++) {
    if (input.value[i] !== input.value[inputLen - 1 - i]) {
      h2.innerText = `${input.value} is a NOT Palindrome`;
    } else {
      h2.innerText = `${input.value} is a Palindrome`;
    }
  }
  input.value = '';
}
form.addEventListener('click', (event) => checker(event));