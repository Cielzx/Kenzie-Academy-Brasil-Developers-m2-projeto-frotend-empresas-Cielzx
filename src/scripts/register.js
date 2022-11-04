import { createUser } from "./request.js"

function eventRegister (){
    const form = document.querySelector('form')
    console.log(form)
    // const element = [...form.elements]
    
  
    form.addEventListener("submit", async (event)=>{
        event.preventDefault()

        const body = {
            username : event.target.children[0].value,
            password:event.target.children[2].value,
            email:event.target.children[1].value,
            professional_level: event.target.children[3].value
        }

        console.log(body)
        await createUser(body)
    })
      
    
  }
export {eventRegister}