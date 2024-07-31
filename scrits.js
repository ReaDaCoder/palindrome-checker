let input = document.getElementById("input");
let h2 = document.querySelector("h2");

function checker(event){
  event.preventDefault();
  console.dir(input);
  for(let i = 0; i < input.length; i++){


  }
}
let form = document.getElementById("input-form");
form.addEventListener('click', checker);