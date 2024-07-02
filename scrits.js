let input = document.querySelector("#input");
function checker(){

let lowerCaseInput = input.toLowerCase();
 let inputLen = input.length
 for (var i = 0; i < inputLen; i++){
    if (input[i] !== input[inputLen - 1 - i]){
        let h2 = document.querySelector("h2");
        h2.innerHTML = `${input.value} is a NOT Palindrome`
    } else{
        h2.innerHTML = `${input.value} is a Palindrome`
    }

 }

}

let form = document.querySelector("#btn");
form.addEventListener("click", checker);