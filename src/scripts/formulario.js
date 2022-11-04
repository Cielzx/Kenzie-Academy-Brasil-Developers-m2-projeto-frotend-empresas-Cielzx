import { createDepart } from "./request.js"
import { listOfDepartments } from "./request.js"
import { editDepart } from "./request.js"
import { deleteDepart } from "./request.js"
import { renderDepartamens } from "./render.js"

import openModal from "./modal.js"
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

    // formulario.insertAdjacentHTML("beforeend", `
    //     <div class="delete-container">
    //     <h3>Deletar Post</h3>
    //     <h4>Certeza que deseja excluir este departamento?</h4>
    //     <p>Após executar essa ação não será possível desfazer</p>
    //     <div class="button-delete">
    //         <button type="submit" class="cancel" >Cancelar</button>
    //         <button type="submit" class="createButton">Sim, excluir este post</button>
    //     </div>
    //     </div>
    // `)

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

export {createDepartForm,openModalDelete,editDepartForm,deleteDepartForm}