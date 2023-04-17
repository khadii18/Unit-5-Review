let puppy = document.querySelector('.puppy')
let dinosaur = document.querySelector('.dinosaur')
let kitten = document.querySelector('.kitten')

let button = document.querySelector('.button')
let input = document.querySelector('.input')
let result = document.querySelector('.result')
button.onclick = function() {
  let Userinput = input.value
  if (Userinput == 'A puppy') {
    result.innerHTML = 'Yess a nice cute little puppy!'
    puppy.style.display = 'block'
    
  }
  else if (Userinput == 'A kitten') {
    result.innerHTML = 'Cute brown kitten!'
    kitten.style.display = 'block'
    
    
  }

    
  else {
    result.innerHTML = 'Dinosaurrr!'
    dinosaur.style.display = 'block'
   
    
    
  }

}