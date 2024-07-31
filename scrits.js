let input = document.getElementById("input");
let h2 = document.querySelector("h2");

function checker(event){
  event.preventDefault();
  for(let i = 0; i < input.length; i++){
    let input = document.getElementById("input");
    let h2 = document.querySelector("h2");

    console.log(input);
  }
}
let form = document.getElementById("input-form");
form.addEventListener('click', checker);