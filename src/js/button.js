var button = document.querySelector('.page__button_text')
var container = document.querySelector('.swiper-wrapper')
var buttonTwo = document.querySelector('.devices__button')
var containerTwo = document.querySelector('.devices__wrapper')

button.addEventListener('click', function () {
  if (button.classList.contains('hidden')) {
    button.textContent = 'Показать все'
  } else {
    button.textContent = 'Скрыть'
  }

  button.classList.toggle('hidden')

  if (container.style.maxHeight == '170px') {
    container.style.maxHeight = '300px'
  } else {
    container.style.maxHeight = '170px'
  }
})

buttonTwo.addEventListener('click', function () {
  if (buttonTwo.classList.contains('hidden')) {
    buttonTwo.textContent = 'Скрыть'
  } else {
    buttonTwo.textContent = 'Показать все'
  }

  if (containerTwo.style.maxHeight == '170px') {
    containerTwo.style.maxHeight = '350px'
  } else {
    containerTwo.style.maxHeight = '170px'
  }
  buttonTwo.classList.toggle('hidden')
})
