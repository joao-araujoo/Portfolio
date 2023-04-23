const root = document.querySelector(':root')

document.querySelector('.slider').addEventListener('click', () => {
    if(document.querySelector('input.toggle-input').checked === true){
        root.style.setProperty('--primary-color', '#fff')
        root.style.setProperty('--secondary-color', '#000')
        root.style.setProperty('--font-color', '#4b4b4b')
        root.style.setProperty('--selection-color', 'rgba(206, 206, 206, 0.8)')
    } else {
        root.style.setProperty('--primary-color', '#000')
        root.style.setProperty('--secondary-color', '#fff')
        root.style.setProperty('--font-color', '#ccc')
        root.style.setProperty('--selection-color', 'rgba(53, 53, 53, 0.8)')
    }
})