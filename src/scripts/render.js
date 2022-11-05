
import { listOfDepartments,listOfUser,getUserProfiles,dissmissFun } from "./request.js"
import { openModal,openModalVisualizer,openModalEdit } from "./modal.js";
import { editDepartForm,visualizerForm,openModalDelete,editDepartUser,openModalUserDelete,editUserStatus } from "./formulario.js";



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
    sec.innerHTML=""

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
        button.addEventListener('click',async(e)=>{
            const form = await editUserStatus()
            openModal(form)
        })
        button.classList.add('user-edit-button')
    
        div.append(divUser,divButton)
        divUser.append(pEmail,pNivel,pModo)
        divButton.appendChild(button)
        sec.append(h1,div)
    
  




}

async function renderDepartamensFiltered(filter){
    const dept = await listOfDepartments()
    const ul = document.querySelector('.departament-list-style')
    ul.innerHTML = ''
    const ulLis = document.createElement('ul')
    ulLis.classList.add('list-visualizer')

    const listUser = await listOfUser()
    

    filter.filter((depart)=>{
        const li = document.createElement('li')
        const filtro = listUser.filter((element) => {
            if(element.department_uuid === depart.uuid){
                return element
            }
        } )   
        
    //First div
    const div = document.createElement('div')
    div.classList.add('list-text')
    const h1 = document.createElement('h1')
    h1.innerText = depart.name
    const span = document.createElement('span')
    span.innerText = depart.description
    const span2 = document.createElement('span')
    span2.innerText = depart.companies.name

    //Second Div
    const divButton = document.createElement('div')
    divButton.classList.add('dept-buttons')
    const buttonObserver = document.createElement('button')
    buttonObserver.classList.add('observer-button')
    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit-button')




    buttonObserver.addEventListener('click',async (e)=>{
        const form = await visualizerForm(depart.name,depart.description,depart.companies.name,depart.uuid,ulLis)
        renderUserHired(ulLis,filtro)
        openModalVisualizer(form)
    })
 
buttonEdit.addEventListener('click',async (e)=>{
    e.preventDefault()
    const formulario = await editDepartForm(depart.uuid)
    console.log(formulario)
    openModal(formulario)
})
    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete-button')
    buttonDelete.addEventListener('click',async (e)=>{
        e.preventDefault()
       await openModalDelete(depart.uuid,depart.name)
    })

    div.append(h1,span,span2)
    divButton.append(buttonObserver,buttonEdit,buttonDelete)
    li.append(div,divButton)
    ul.appendChild(li)
    })
    

}



async function renderDepartamens(){
    const dept = await listOfDepartments()
    const ul = document.querySelector('.departament-list-style')
    ul.innerHTML = ''
    const ulLis = document.createElement('ul')
    ulLis.innerHTML = ''
    ulLis.classList.add('list-visualizer')

    const listUser = await listOfUser()
    

    dept.forEach((depart)=>{
        const li = document.createElement('li')
        const filtro = listUser.filter((element) => {
            if(element.department_uuid === depart.uuid){
                return element
            }
        } )   
        
    //First div
    const div = document.createElement('div')
    div.classList.add('list-text')
    const h1 = document.createElement('h1')
    h1.innerText = depart.name
    const span = document.createElement('span')
    span.innerText = depart.description
    const span2 = document.createElement('span')
    span2.innerText = depart.companies.name

    //Second Div
    const divButton = document.createElement('div')
    divButton.classList.add('dept-buttons')
    const buttonObserver = document.createElement('button')
    buttonObserver.classList.add('observer-button')
    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit-button')




    buttonObserver.addEventListener('click',async (e)=>{
        const form = await visualizerForm(depart.name,depart.description,depart.companies.name,depart.uuid,ulLis)
        renderUserHired(ulLis,filtro)
        openModalVisualizer(form)
    })
 
buttonEdit.addEventListener('click',async (e)=>{
    e.preventDefault()
    const formulario = await editDepartForm(depart.uuid)
    console.log(formulario)
    openModalEdit(formulario)
})
    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete-button')
    buttonDelete.addEventListener('click',async (e)=>{
        e.preventDefault()
       await openModalDelete(depart.uuid,depart.name)
    })

    div.append(h1,span,span2)
    divButton.append(buttonObserver,buttonEdit,buttonDelete)
    li.append(div,divButton)
    ul.appendChild(li)
    })
    

}

const renderUserHired = async (ul,filt)=>{
    const users = await listOfUser()
    const depart = await listOfDepartments()
    ul.innerHTML = ""
    ul.classList.add('list-visualizer')

    filt.filter((element)=>{
         const li = document.createElement('li')
        const pli = document.createElement('p')
        pli.innerText = element.username
        const spanLi = document.createElement('span')
        spanLi.innerText = element.professional_level
        const spanLi2 = document.createElement('span')
        depart.forEach((dept)=>{
            if(dept.uuid == element.department_uuid){
                spanLi2.innerText = dept.name
            }
        })
        const buttonDesl = document.createElement('button')
        buttonDesl.classList.add('button-desligar')
        buttonDesl.innerText = "Desligar"
        buttonDesl.type = 'button'
        buttonDesl.addEventListener('click',async(e)=>{
            dissmissFun(element.uuid)
            document.location.reload()
        })
        li.append(pli,spanLi,spanLi2,buttonDesl)
        ul.append(li)
    })
       
    
}





async function renderUser(){
    const users = await listOfUser()
    const depart = await listOfDepartments()
    const ul = document.querySelector('.departament-user-style')
    

    
    users.forEach(async (user)=>{

        
        if(user.is_admin != true){
              const li = document.createElement('li')
            
            
            

    //First div
    const div = document.createElement('div')
    div.classList.add('list-text')
    const h1 = document.createElement('h1')
   h1.innerText = user.username
    const p = document.createElement('p')
    p.innerText = user.professional_level
    const p2 = document.createElement('p')
    depart.forEach((element)=>{
        if(element.uuid == user.department_uuid){
            p2.innerText = element.name
        }
    })
    //Second Div
    const divButton = document.createElement('div')
    divButton.classList.add('dept-buttons')
    const buttonObserver = document.createElement('button')
    buttonObserver.classList.add('observer-button')
    const buttonEdit = document.createElement('button')
    buttonEdit.addEventListener('click',async (e)=>{
        const form = await editDepartUser(user.uuid)
        openModal(form)

    })
    buttonEdit.classList.add('edit-button')
    const buttonDelete = document.createElement('button')
    buttonDelete.addEventListener('click',async (e)=>{
        e.preventDefault()
        await openModalUserDelete(user.uuid,user.username)

    })
    buttonDelete.classList.add('delete-button')

    div.append(h1,p,p2)
    divButton.append(buttonEdit,buttonDelete)
    li.append(div,divButton)
    ul.appendChild(li)
        }
      
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
export {renderList,renderOptionsFiltred,renderUserStatus,renderDepartamens,renderUser,renderUserHired,renderDepartamensFiltered}