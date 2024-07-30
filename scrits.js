
<<<<<<< HEAD
function checker(){


let input = document.querySelector("#input");
let lowerCaseInput = input.toLowerCase();
 let inputLen = input.length
 for (var i = 0; i < inputLen/2; i++){
    if (input[i] !== input[inputLen - 1 - i]){
        h2.innerText = `${input.value} is a NOT Palindrome`
    } else{
        h2.innerText = `${input.value} is a Palindrome`
=======
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
>>>>>>> 2bc62989c154e8f1fea8ed881977d74bf15d8e04
    }
  }
  input.value = '';
}
<<<<<<< HEAD
form.addEventListener("click", checker);














/*let input = document.querySelector("#input");
 let form = document.querySelector("#btn");
 let h2 = document.querySelector("h2");


 function checker(){
event.preventDefault();
  let inputLen = input.value.length
  for (var i = 0; i < inputLen; i++){
     if (input[i] !== input[inputLen - 1 - i]){
       
        h2.innerText = ${input.value} is a NOT Palindrome
    } else{
        h2.innerText = ${input.value} is a Palindrome
    }

 }

input.value = ''
}

let form = document.querySelector("#input-form");
form.addEventListener("submit", checker);
=======
form.addEventListener('click', (event)=> checker(event));
>>>>>>> 2bc62989c154e8f1fea8ed881977d74bf15d8e04
