let input = document.getElementById("input").value;
let h2 = document.querySelector("h2");

function checker(event){
  event.preventDefault();
  console.log(input);
  for(let i = 0; i < input.length; i++){
    console.log("Is not a palindrome checker");
    if(input.value === input.value.split("").reverse().join("")){
      console.log("check");
    } else{
    //console.log("Is not a palindrome checker");
    }

  }
}
let form = document.getElementById("input-form");
form.addEventListener('click', checker);