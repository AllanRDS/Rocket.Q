import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botôes que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()

  const text = check ? 'Marcar como lida' : 'Excluir'

  modalTitle.innerHTML = `${text} esta pergunta`

  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`

  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  //Abrir Modal
  modal.open()
}

//Pegar quando o marcar como lido for clicado
