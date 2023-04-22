const cursor = document.querySelector('.cursor')
let timeout

// follow cursor on move
document.addEventListener('mousemove', (e) => {
    let x =  e.pageX
    let y =  e.pageY

    cursor.style.top = y - 7 + "px"
    cursor.style.left = x - 7 + "px"
    cursor.style.display = 'block'

    // cursor effects on mouse stopped
    function mouseStoped(){
        cursor.style.display = 'none'
    }
    clearTimeout(timeout)
    timeout = setTimeout(mouseStoped, 1500)
})

// cursor effects on mouseout 
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'
})

document.addEventListener('mousedown', () => {
    cursor.style.boxShadow = 'none' 
})

document.addEventListener('mouseup', () => {
    cursor.style.boxShadow = 'none'
})

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
        document.body.style.backgroundColor = '#fff'
    })
}, 1000)
