var modalCall = document.querySelector('.call_hidden')
var modalChat = document.querySelector('.chat_hidden')
var buttonCall = document.querySelector('.call')
var buttonChat = document.querySelector('.chat')
var buttonCloseChat = document.querySelector('close--modalForm-chat')
var buttonCloseCall = document.querySelector('close--modalForm-call')

buttonCall.addEventListener('click', function () {
  modalCall.classList.toggle('modal--show')
})

buttonChat.addEventListener('click', function () {
  modalChat.classList.toggle('modal--show')
})

buttonCloseChat.addEventListener('click', function () {
  modalCall.classList.toggle('modal--show')
})

buttonCloseCall.addEventListener('click', function () {
  modalChat.classList.toggle('modal--show')
})
