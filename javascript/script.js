let timeout

const divPulse = document.createElement('div')
divPulse.className = 'pulse'
const changeSceneButton = document.createElement('button')
changeSceneButton.innerText = 'Lets start'
changeSceneButton.className = 'change-scene'

setTimeout(() => {
    divPulse.appendChild(changeSceneButton)
    document.querySelector('.intro').appendChild(divPulse)
    document.querySelector('.pulse').addEventListener('click', () => {
        document.querySelector('.intro').remove()
        document.querySelector('.container').style.display = 'inline'
        document.body.style.backgroundColor = 'var(--primary-color)'
    })
}, 1000)
