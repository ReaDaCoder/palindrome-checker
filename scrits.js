let input = document.getElementById("input");
let h2 = document.querySelector("h2");

function checker(event){
  event.preventDefault();
  for(let i = 0; i < input.value.length; i++){
      h2.innerHTML = `${input.value} is a Palindrome`;
  }
}
let form = document.getElementById("input-form");
form.addEventListener('click', checker);


/*if(i=input.value){
      h2.innerHTML = `${input.value} is a Palindrome`;
    } else{
      h2.innerHTML = `${input.value} is NOT Palindrome`;
    }*/