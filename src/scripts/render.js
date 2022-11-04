
import { listOfDepartments } from "./request.js"
import openModal from "./modal.js";
import { editDepartForm } from "./formulario.js";
import { openModalDelete } from "./formulario.js";
import { getUserProfiles } from "./request.js";

function renderList(){
    const ul = document.querySelector('.container-list')
  
    const company = JSON.parse(localStorage.getItem('companies'))

    company.forEach(element => {

    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = element.name


    const div = document.createElement('div')
    div.classList.add('div-span')
    const span = document.createElement('span')
    span.classList.add('span-list-style')
    span.innerText = element.opening_hours
    const span2 = document.createElement('span')
    span2.innerText = element.sectors.description
    span2.classList.add('span-box')


    div.append(span,span2)
    li.append(p,div)
    ul.append(li)
    });
    
}


function renderOptionsFiltred(filter){
    const ul = document.querySelector('.container-list')
    ul.innerHTML =""

    // console.log(sectors)

            filter.filter(element=>{
                const li = document.createElement('li')
                const p = document.createElement('p')
                p.innerText = element.name
    
                const div = document.createElement('div')
                div.classList.add('div-span')
                const span = document.createElement('span')
                span.classList.add('span-list-style')
                span.innerText = element.opening_hours
                const span2 = document.createElement('span')
                span2.innerText = element.sectors.description
                span2.classList.add('span-box')
        
        
                div.append(span,span2)
                li.append(p,div)
                ul.append(li)
            })

}


async function  renderUserStatus(){

    const infoUsers = await getUserProfiles()

    const sec = document.querySelector('.sec-user-status')

    const h1 = document.createElement('h1')
    h1.innerText = infoUsers.username

    
        const div = document.createElement('div')
        div.classList.add('status-div')
    
        //USER
        const divUser = document.createElement('div')
        divUser.classList.add('user-status')
        const pEmail = document.createElement('p')
        pEmail.innerText = `Email: ${infoUsers.email}`
        const pNivel = document.createElement('p')
        pNivel.innerText = infoUsers.professional_level
        const pModo = document.createElement('p')
        pModo.innerText = infoUsers.kind_of_work
    
        //Button
        const divButton = document.createElement('div')
        divButton.classList.add('button-edit-div')
        const button = document.createElement('button')
        button.classList.add('user-edit-button')
    
        div.append(divUser,divButton)
        divUser.append(pEmail,pNivel,pModo)
        divButton.appendChild(button)
        sec.append(h1,div)
    
  




}

async function renderDepartamens(){
    const dept = await listOfDepartments()
    const ul = document.querySelector('.departament-list-style')
    ul.innerHTML = ''

    dept.forEach((element)=>{
        const li = document.createElement('li')

    //First div
    const div = document.createElement('div')
    div.classList.add('list-text')
    const h1 = document.createElement('h1')
    h1.innerText = element.name
    const span = document.createElement('span')
    span.innerText = element.description
    const span2 = document.createElement('span')
    span2.innerText = element.companies.name

    //Second Div
    const divButton = document.createElement('div')
    divButton.classList.add('dept-buttons')
    const buttonObserver = document.createElement('button')
    buttonObserver.classList.add('observer-button')
    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit-button')
 
buttonEdit.addEventListener('click',async (e)=>{
    e.preventDefault()
    const formulario = await editDepartForm(element.uuid)
    console.log(formulario)
    openModal(formulario)
})
    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete-button')
    buttonDelete.addEventListener('click',async (e)=>{
        e.preventDefault()
       await openModalDelete(element.uuid,element.name)
    })

    div.append(h1,span,span2)
    divButton.append(buttonObserver,buttonEdit,buttonDelete)
    li.append(div,divButton)
    ul.appendChild(li)
    })
    

}





async function renderUser(){
    const users = JSON.parse(localStorage.getItem('cadastrados'))
    const ul = document.querySelector('.departament-user-style')
    

    users.forEach((element)=>{
        const li = document.createElement('li')

    //First div
    const div = document.createElement('div')
    div.classList.add('list-text')
    const h1 = document.createElement('h1')
   h1.innerText = element.username
    const p = document.createElement('p')
    p.innerText = element.professional_level
    const p2 = document.createElement('p')
    p2.innerText = element.department_uuid

    //Second Div
    const divButton = document.createElement('div')
    divButton.classList.add('dept-buttons')
    const buttonObserver = document.createElement('button')
    buttonObserver.classList.add('observer-button')
    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit-button')
    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete-button')

    div.append(h1,p,p2)
    divButton.append(buttonEdit,buttonDelete)
    li.append(div,divButton)
    ul.appendChild(li)
    })
    

}

{/* <li>
                    <div class="list-text">
                         <p>Departament name</p>
                    <span>Departament description</span>
                    <span>Company name</span>
                    </div>
                   
                    <div class="dept-buttons">
                        <button class="observer-button"></button>
                        <button class="edit-button"></button>
                        <button class="delete-button"></button>
                    </div>
                </li> */}
export {renderList,renderOptionsFiltred,renderUserStatus,renderDepartamens,renderUser}