import { listOfCooworkes,listDepartUser } from "./request.js"


async function renderDepName(){
    const ul = document.querySelector(".list-contain")
    const departUser = await listDepartUser()

    const sect = document.querySelector('.list-section')

    const div = document.createElement('div')
    div.classList.add('div-company')

    const p = document.createElement('p')
    p.innerText = departUser.name
    const ps = document.createElement('p')
    ps.innerText = "-"
    const pnome = document.createElement('p')
    pnome.innerText = departUser.departments[0].name

    div.append(p,ps,pnome)
    sect.append(div,ul)
}


async function renderCoworkersList(){
    const ul = document.querySelector(".list-contain")
    const listCo = await listOfCooworkes()
    
console.log(listCo)
    listCo.forEach(element => {
         console.log(element.users)
        const li = document.createElement('li')
        const p = document.createElement('p')
        p.innerText = element.username
    
        const span = document.createElement('span')
        span.innerText = element.professional_level
    
        li.append(p,span)
        ul.appendChild(li)
    });
       
    
  
}


{/* <li>
<p>Nome do colega</p>
<span>Senior</span>
</li> */}



export {renderDepName,renderCoworkersList}