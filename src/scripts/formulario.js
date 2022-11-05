import { createDepart } from "./request.js"
import { listOfDepartments } from "./request.js"
import { editDepart } from "./request.js"
import { deleteDepart } from "./request.js"
import { getUserOutOfWork } from "./request.js"
import { renderDepartamens, renderUserHired } from "./render.js"
import { openModal } from "./modal.js"
import { hireFunction } from "./request.js"
import { updateUser } from "./request.js"
import { renderUser } from "./render.js"
import { deleteUser } from "./request.js"
import { updaUserStatus } from "./request.js"
import { renderUserStatus } from "./render.js"



const empresas = JSON.parse(localStorage.getItem('companies'))
console.log(empresas)

const createDepartForm = () => {   
const ul = document.querySelector('.departament-list-style')

    const formulario = document.createElement("form")
    formulario.classList.add("formbase")
    
    
    const h1 = document.createElement('h1')
    h1.innerText ="Criar departamento"
    const div = document.createElement('div')
    div.classList.add('div-form')
    const inputName = document.createElement('input')
    inputName.placeholder = 'Nome do departamento'
    const inputDescription = document.createElement('input')
    inputDescription.placeholder = 'Descrição'
    inputDescription.type = "text"
    
        const select = document.createElement('select')
        
        empresas.forEach((element)=>{
            const option = document.createElement('option')
            option.innerText = element.name
            option.value = element.uuid
            select.append(option)
        })
    
    const button = document.createElement('button')
    button.innerText = 'Criar departamento'
    button.classList.add('button-form')

    formulario.addEventListener('submit', async (e)=>{
        e.preventDefault()
        console.log(e.target.children[3])
        const body = {
            name: e.target.children[1].value,
            description: e.target.children[2].value,
            company_uuid: e.target.children[3].value
        }
        
        await createDepart(body)
        await renderDepartamens()
        document.location.reload()
    })

    formulario.append(h1,inputName,inputDescription,select,button)
   

    return formulario
}


const editDepartForm = async (id) => {   
    const ul = document.querySelector('.departament-list-style')
    
        const formulario = document.createElement("form")
        formulario.classList.add("formbase")

        const dept = await listOfDepartments()
        
        
        const h1 = document.createElement('h1')
        h1.innerText ="Editar departamento"
        const div = document.createElement('div')
        div.classList.add('div-form')
        const inputDescription = document.createElement('input')
        inputDescription.classList.add('input-desc')
        inputDescription.placeholder = 'Descrição'
        inputDescription.type = "text"
        
        const button = document.createElement('button')
        button.innerText = 'Salvar alteração'
        button.classList.add('button-form') 


        formulario.addEventListener('submit', async (e)=>{
            e.preventDefault()
            console.log(e.target.children[1].value)
            const body = {
                 description: e.target.children[1].value
            }
            
            console.log(id)
            await editDepart(body,id)
            
            await renderDepartamens()
    
        })
    
        formulario.append(h1,inputDescription,button)
       
    
        return formulario
    }



    const editDepartUser= async (id) => {   
        const ul = document.querySelector('.departament-list-style')
        
            const formulario = document.createElement("form")
            formulario.classList.add("formbase")
            
            
            const h1 = document.createElement('h1')
            h1.innerText ="Editar departamento"
            const div = document.createElement('div')
            div.classList.add('div-form')
            const select = document.createElement('select')
            const optionWork = document.createElement('option')
            optionWork.value = "estágio"
            optionWork.innerText = "Estâgio"
            const optionWork2 = document.createElement('option')
            optionWork2.value = "júnior"
            optionWork2.innerText = "Júnior"
            const optionWork3 = document.createElement('option')
            optionWork3.value = "sênior"
            optionWork3.innerText = "Sênior"

            const select2 = document.createElement('select')
            const optionprofessional = document.createElement('option')
            optionprofessional.value = "presencial"
            optionprofessional.innerText ="Presencial"
            const optionprofessional2 = document.createElement('option')
            optionprofessional2.value = "home office"
            optionprofessional2.innerText ="Home office"

            const optionprofessional3 = document.createElement('option')
            optionprofessional3.value = "hibrido"
            optionprofessional3.innerText ="Hibrido"
            
            const button = document.createElement('button')
            button.innerText = 'Salvar alteração'
            button.classList.add('button-form') 
    
    
            formulario.addEventListener('submit', async (e)=>{
                e.preventDefault()
                console.log(e.target.children[1].value)
                const body = {
                    kind_of_work: e.target.children[0].value,
                    professional_level: e.target.children[1].value
                }
                
                await updateUser(body,id)
                
                 renderUser()
                
                document.location.reload()
            })
            select.append(optionWork,optionWork2,optionWork3)
            select2.append(optionprofessional,optionprofessional2,optionprofessional3)
        
            formulario.append(h1,select,select2,button)
           
        
            return formulario
        }
    


    const openModalDelete = async (id,nome) => {
        const deleteForm = deleteDepartForm(id,nome)
        openModal(deleteForm)
      }


const deleteDepartForm = (id,nome) => {
    const formulario = document.createElement("form")
    formulario.classList.add("form-delete")


    const div = document.createElement('div')
    div.classList.add('delete-container')
    const h3 = document.createElement('h3')
    h3.innerText = `Realmente deseja deletar o ${nome} e demitir seus funcionários?`
    const divButton = document.createElement('div')
    divButton.classList.add('button-delete')
    const buttonConfirm = document.createElement('button')
    buttonConfirm.classList.add('deletebutton')
    buttonConfirm.type ="submit"
    buttonConfirm.innerText = "Sim,deletar departamento."


    formulario.addEventListener("submit", async (event) => {
        await deleteDepart(id)
        await renderDepartamens()
        // document.location.reload()

    })
    
    divButton.append(buttonConfirm)
    div.append(h3,divButton)
    formulario.append(div)
    return formulario
}



const visualizerForm = async (nome,descricao,empresa,id,ul)=>{

    const users = await getUserOutOfWork()

    
    const listDep = await listOfDepartments()

    
    console.log(ul)
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    const h1 = document.createElement('h1')
    h1.innerText = nome
    const divContainer = document.createElement('div')
    divContainer.classList.add('container-visualizer')
    const divText = document.createElement('div')
    divText.classList.add('visualizer-text')
    const p = document.createElement('p')
    p.innerText = descricao
    const span = document.createElement('span')
    span.innerText = empresa

    const form = document.createElement('form')
    const select = document.createElement('select')
    select.name = 'Funcionarios'

    users.forEach((element)=>{
        const option = document.createElement('option')
        option.innerText = element.username
        option.value = element.uuid
        select.appendChild(option) 
    })
    
    const buttonCont = document.createElement('button')
    buttonCont.innerText ='Contratar'
    buttonCont.classList.add('button-contratar')
    form.addEventListener('submit',async(e)=>{
        e.preventDefault()
        console.log(e.target.children[0].value)
        const body = {
            user_uuid: e.target.children[0].value,
            department_uuid: id ,
        }

        await hireFunction(body)
        document.location.reload()
    })

    
    

    divContainer.append(divText,form)
    divText.append(p,span)
    form.append(select,buttonCont)
    formulario.append(h1,divContainer,ul)

    return formulario

}



const openModalUserDelete = async (id,nome) => {
    const deleteForm = deleteUserForm(id,nome)
    openModal(deleteForm)
  }
const deleteUserForm = (id,nome) => {
    const formulario = document.createElement("form")
    formulario.classList.add("form-delete")


    const div = document.createElement('div')
    div.classList.add('delete-container')
    const h3 = document.createElement('h3')
    h3.innerText = `Realmente deseja remover o usúario ${nome}?`
    const divButton = document.createElement('div')
    divButton.classList.add('button-delete')
    const buttonConfirm = document.createElement('button')
    buttonConfirm.classList.add('deletebutton')
    buttonConfirm.type ="submit"
    buttonConfirm.innerText = "Sim,deletar Usuario."


    formulario.addEventListener("submit", async (event) => {
        await deleteUser(id)
        await renderUser()
        // document.location.reload()

    })
    
    divButton.append(buttonConfirm)
    div.append(h3,divButton)
    formulario.append(div)
    return formulario
}


const editUserStatus= async (id) => {   
    const ul = document.querySelector('.departament-list-style')
    
        const formulario = document.createElement("form")
        formulario.classList.add("formbase")

        const dept = await listOfDepartments()
        
        
        const h1 = document.createElement('h1')
        h1.innerText ="Editar Perfil"
        const div = document.createElement('div')
        div.classList.add('div-form')

        const inputUser = document.createElement('input')
        inputUser.classList.add('input-desc')
        inputUser.placeholder = 'Usuario'
        inputUser.type = "text"


        const inputPassword = document.createElement('input')
        inputPassword.classList.add('input-desc')
        inputPassword.placeholder = 'Senha'
        inputPassword.type = "password"

        const inputEmail = document.createElement('input')
        inputEmail.classList.add('input-desc')
        inputEmail.placeholder = 'Email'
        inputEmail.type = "email"
        
        const button = document.createElement('button')
        button.innerText = 'Salvar alteração'
        button.classList.add('button-form') 


        formulario.addEventListener('submit', async (e)=>{
            e.preventDefault()
            console.log(e.target.children)
            const body = {

                username: e.target.children[1].value,
                password:e.target.children[3].value,
                email:e.target.children[2].value
            }
            
            await updaUserStatus(body)
             renderUserStatus()
            // window.location.reload()
            
        })
    
        formulario.append(h1,inputUser,inputEmail,inputPassword,button)
       
    
        return formulario
    }

export {createDepartForm,openModalDelete,editDepartForm,deleteDepartForm,visualizerForm,editDepartUser,deleteUserForm,openModalUserDelete,editUserStatus}