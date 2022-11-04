import { renderDepartamens } from "../../scripts/render.js"
import { renderUser } from "../../scripts/render.js"
import { listOfDepartments } from "../../scripts/request.js"
import { listOfUser } from "../../scripts/request.js"
import { listOfComapny } from "../../scripts/request.js"
import { createDepartForm, editDepartForm } from "../../scripts/formulario.js"
import openModal from "../../scripts/modal.js"

const logout = document.querySelector('.button-register')

logout.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.removeItem("Token")
    window.location.replace("../login/index.html")
})

const create = document.querySelector('.createButton')

create.addEventListener('click',(e)=>{
    e.preventDefault()
    const formulario = createDepartForm()
    openModal(formulario)
})







listOfDepartments()
listOfComapny()
listOfUser()
renderDepartamens()
renderUser()