// Variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = getRandomNumber()
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
  let canReset = e.key === 'Enter' && screen1.classList.contains('hide')
  if(canReset){
    handleResetClick()
    randomNumber = getRandomNumber()
  }
})

// Randon Number
function getRandomNumber(){
  let random = Math.round(Math.random() * 10)
  return random
}

// função callback
function handleTryClick(event){
  event.preventDefault()
  
  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector('h2').innerHTML = `Acertou em ${xAttempts} tentativas`
  }
  
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  screen1.querySelector('#inputNumber').focus()
}

function toggleScreen(){
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

