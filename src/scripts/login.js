import { login } from "./request.js"

function eventLogin (){
    const form = document.querySelector('form')
    // const element = [...form.elements]
    
  
    form.addEventListener("submit", async (event)=>{
        event.preventDefault()

        const body = {
            password:event.target.children[1].value,
            email:event.target.children[0].value, 
        }
        await login(body)
    })
      
    
  }

  export {eventLogin}