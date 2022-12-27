var button = document.querySelector('.page__button_main-text')
var hiddenText = document.querySelector('.page__text_3')

button.addEventListener('click', function () {
  if (hiddenText.classList.contains('hidden-text')) {
    button.textContent = 'Скрыть'
  } else {
    button.textContent = 'Читать далее'
  }

  hiddenText.classList.toggle('hidden-text')

  if (hiddenText.style.display != 'block') {
    hiddenText.style.display = 'block'
  } else {
    hiddenText.style.display = 'none'
  }
})
