import { renderUserStatus } from "../../scripts/render.js";

const logout = document.querySelector('.button-register')

logout.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.removeItem("Token")
    window.location.replace("../login/index.html")
})

renderUserStatus()