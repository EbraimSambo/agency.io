let btnMenu = document.querySelector('.fa-bars');


btnMenu.onclick = () => {
    document.querySelector('.navbar ').classList.toggle('activar')
    btnMenu.classList.toggle('fas-times')
    document.querySelector('body ').classList.toggle('activar')

}