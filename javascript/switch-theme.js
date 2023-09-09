const root = document.querySelector(':root')

const changeRootProperty = (primaryColor, secondaryColor, fontColor, selectionColor) => {
    root.style.setProperty('--primary-color', primaryColor)
    root.style.setProperty('--secondary-color', secondaryColor)
    root.style.setProperty('--font-color', fontColor)
    root.style.setProperty('--selection-color', selectionColor)
}

document.querySelector('.slider').addEventListener('click', () => {
    if(document.querySelector('input.toggle-input').checked){
        changeRootProperty('#fff', '#000', '#4b4b4b', 'rgba(206, 206, 206, 0.8)')
    } else {
        changeRootProperty('#000', '#fff', '#ccc', 'rgba(53, 53, 53, 0.8)')
    }
})