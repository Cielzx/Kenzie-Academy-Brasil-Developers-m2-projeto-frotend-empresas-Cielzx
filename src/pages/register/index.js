import toast from "../../scripts/toast.js"
import { eventRegister } from "../../scripts/register.js"
import { createUser } from "../../scripts/request.js"

const buttonHome = document.querySelector('.button-login')
const buttonLogin = document.querySelector('.button-register')

buttonHome.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../../index.html')
})


buttonLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../login/index.html')
})

const returnLogin = document.querySelector('#return-login')
returnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../login/index.html')
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


eventRegister()
