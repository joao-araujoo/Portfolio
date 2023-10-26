const hamburger = document.querySelector('.hamburger')
const menuHamburger = document.querySelector('.menu-hamburger')
const hamburgerBars = document.querySelectorAll('.hamburger .bar')

hamburger.addEventListener('click', () => {
    toggleMenuHamburger()
})

document.body.addEventListener('click', (event) => {
    if (menuHamburger.style.right === '0%' && event.target !== hamburger && !menuHamburger.contains(event.target)) {
        toggleMenuHamburger()
    }
})

function toggleMenuHamburger() {
    hamburger.classList.toggle('change')
    
    if (menuHamburger.style.right === '0%') {
        // close menu
        menuHamburger.style.right = '-100%'
        hamburgerBars.forEach(bar => bar.classList.toggle('change-bar-theme'))
        
    } else {
        // open menu
        menuHamburger.style.right = '0%'
        hamburgerBars.forEach(bar => bar.classList.toggle('change-bar-theme'))
    }
}