import { renderUserStatus } from "../../scripts/render.js";
import { renderDepName,renderCoworkersList } from "../../scripts/renderUser.js";
import { getUserProfiles } from "../../scripts/request.js";

const logout = document.querySelector('.button-register')

logout.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.removeItem("Token")
    window.location.replace("../login/index.html")
})

async function dislplay(){
    const div = document.querySelector('.div-list-h1')
    const ul = document.querySelector('.list-contain')
    const user = await getUserProfiles()

    if(user.department_uuid === null){
        div.classList.remove('div-list-h1')
      div.classList.toggle('div-list-h1-flex')
      ul.append(div)
    }



}

renderUserStatus()
renderDepName()
renderCoworkersList()
getUserProfiles()
dislplay()