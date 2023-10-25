const createIntroDivButton = () => {
    const divPulse = document.createElement('div')
    divPulse.className = 'pulse'

    divPulse.addEventListener('click', () => {
        document.querySelector('.intro').remove()
        document.querySelector('.container').style.display = 'inline'
        document.body.style.backgroundColor = 'var(--primary-color)'
    })

    createIntroButton(divPulse)
    document.querySelector('.intro').appendChild(divPulse)
}

const createIntroButton = (div) => {
    const changeSceneButton = document.createElement('button')
    changeSceneButton.innerText = 'Lets start'
    changeSceneButton.className = 'change-scene'

    div.appendChild(changeSceneButton)
}

// TODO aumentar o timeout para 7000-8000 quando finalizar
setTimeout(() => {
    createIntroDivButton()
}, 1000)

// TODO modularizar tudo para apenas chamar as funções aqui