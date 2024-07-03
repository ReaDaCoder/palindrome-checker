

let input = document.querySelector("#input");
let form = document.querySelector("#btn");
let h2 = document.querySelector("h2");

function checker(){
    event.preventDefault();

//let lowerCaseInput = input.toLowerCase();
 let inputLen = input.value.length;
 for (var i = 0; i < inputLen; i++){
    if (input[i] !== input[inputLen - 1 - i]){
        h2.innerText = `${input.value} is a NOT Palindrome`
    } else{
        h2.innerText = `${input.value} is a Palindrome`
    }
 }
 input.value = ''
 conloge.log('is this function being called');
}
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


form.addEventListener("click", checker);*/