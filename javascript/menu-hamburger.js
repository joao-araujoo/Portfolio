const hamburger = document.querySelector('div.hamburger')
const menuHamburger = document.querySelector('.menu-hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change')    
    if(menuHamburger.style.right === '-100%'){
        menuHamburger.style.right = '0%'
        return
    }

    menuHamburger.style.right = '-100%'
})