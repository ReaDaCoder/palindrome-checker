let input = document.querySelector("input");
let form = document.querySelector("btn");
let h2 = document.querySelector("h2");

function checker(){
    event.preventDefault();

let lowerCaseInput = input.toLowerCase();
 let inputLen = input.length
 for (var i = 0; i < inputLen/2; i++){
    if (input[i] !== input[inputLen - 1 - i]){
        let h2 = document.querySelector("h2");
        h2.innerHTML = `${input.value} is a NOT Palindrome`
    } else{
        h2.innerHTML = `${input.value} is a Palindrome`
    }

 }

}
form.addEventListener("submit", checker);

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


form.addEventListener("click", checker); */