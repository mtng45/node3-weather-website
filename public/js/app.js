console.log('client side javascript file is loaded!')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const fetchForecast = location => {

  fetch('http://localhost:3000/weather?address=' +　location).then((responce) => {
    responce.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
}

const weatherForm = document.querySelector('form')
const search =  document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetchForecast(location)
})