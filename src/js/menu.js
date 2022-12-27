var asideContainer = document.querySelector('.aside')
var buttonClose = document.querySelector('.aside__button')
var buttonOpenMenu = document.querySelector('.burger')

buttonOpenMenu.addEventListener('click', function () {
  asideContainer.classList.toggle('hidden-menu')
})

buttonClose.addEventListener('click', function () {
  asideContainer.classList.toggle('hidden-menu')
})
