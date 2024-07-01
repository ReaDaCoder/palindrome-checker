
function checker(){


let input = document.querySelector("#input");
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

let form = document.querySelector("#input-form");
form.addEventListener("submit", checker);