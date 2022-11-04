import { eventLogin } from "../../scripts/login.js"
import { getUserProfiles } from "../../scripts/request.js"

const buttonRegister = document.querySelector('.button-register')
buttonRegister.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../register/index.html')
})

const buttonHome = document.querySelector('.button-login')
buttonHome.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../../index.html')
})

const button = document.querySelector('#register')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../register/index.html')
})


const buttonMobile = document.querySelector(".home-mobile-button")

buttonMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('oi')
    buttonMobile.classList.toggle('home-mobile-x')
    const divMobile = document.querySelector(".div-button-header")
    divMobile.classList.toggle('show-button-mobile')
})


const buttonloginMobile = document.querySelector('.button-login-mobile')
buttonloginMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../../index.html')
})

// validateUser()
// getUserProfiles()
eventLogin()