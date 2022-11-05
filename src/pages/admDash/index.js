import { renderDepartamens } from "../../scripts/render.js"
import { renderUser } from "../../scripts/render.js"
import { listOfDepartments } from "../../scripts/request.js"
import { listOfUser } from "../../scripts/request.js"
import { listOfComapny } from "../../scripts/request.js"
import { createDepartForm, editDepartForm } from "../../scripts/formulario.js"
import { openModal } from "../../scripts/modal.js"
import { renderDepartamensFiltered } from "../../scripts/render.js"


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



async function renderOptions(){

    const listComp = await listOfComapny()
    const listDepar = await listOfDepartments()
    const select = document.querySelector('.select-style')

    listComp.forEach((list)=>{
        const option = document.createElement("option")
        option.value = list.name
        option.innerText = list.name
        select.appendChild(option)
    })
    select.addEventListener('change',(e)=>{
        e.preventDefault()
        if(select.value === "selecionar"){
            return renderDepartamens()
        }

        const companyFilter = listDepar.filter(element => {
            if(element.companies.name === select.value){
                return element
            }
        })

        console.log(companyFilter)
        renderDepartamensFiltered(companyFilter)
    })

    
}





listOfDepartments()
listOfComapny()
listOfUser()
renderDepartamens()
renderUser()
renderOptions()