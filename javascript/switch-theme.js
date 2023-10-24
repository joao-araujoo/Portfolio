const root = document.querySelector(':root')
const slider = document.querySelector('.slider')

const changeRootProperty = (primaryColor, secondaryColor, fontColor, selectionColor) => {
    root.style.setProperty('--primary-color', primaryColor)
    root.style.setProperty('--secondary-color', secondaryColor)
    root.style.setProperty('--font-color', fontColor)
    root.style.setProperty('--selection-color', selectionColor)
}

const changeButtonIcons = (githubIcon, linkedinIcon) => {
    document.querySelector('.github-button img').src = githubIcon
    document.querySelector('.linkedin-button img').src = linkedinIcon
}

slider.addEventListener('click', () => {
    if(document.querySelector('input.toggle-input').checked){
        changeRootProperty('#fff', '#141414', '#000', 'rgba(206, 206, 206, 0.8)')
        changeButtonIcons('./assets/icons/github light.png', './assets/icons/linkedin light.png')
    } else {
        changeRootProperty('#141414', '#fff', '#fafafa', 'rgba(53, 53, 53, 0.8)')
        changeButtonIcons('./assets/icons/github dark.png', './assets/icons/linkedin dark.png')
    }
})