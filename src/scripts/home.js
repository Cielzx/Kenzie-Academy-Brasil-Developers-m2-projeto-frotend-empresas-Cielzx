import { filterOptions } from "./filter.js"
import { renderList } from "./render.js"
import { listOfComapny } from "./request.js"


const buttonMobile = document.querySelector(".home-mobile-button")

buttonMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('oi')
    buttonMobile.classList.toggle('home-mobile-x')
    const divMobile = document.querySelector(".div-button-header")
    divMobile.classList.toggle('show-button-mobile')
})


const buttonRegister = document.querySelector('.button-register')
console.log(buttonRegister)
buttonRegister.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../src/pages/register/index.html')
})

const buttonRegisterMobile = document.querySelector('.button-register-mobile')
buttonRegisterMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../src/pages/register/index.html')
})


const buttonloginMobile = document.querySelector('.button-login-mobile')
buttonloginMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../src/pages/register/index.html')
})


const buttonLogin = document.querySelector('.button-login')
buttonLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('../src/pages/login/index.html')
})

listOfComapny()
filterOptions()
renderList()
