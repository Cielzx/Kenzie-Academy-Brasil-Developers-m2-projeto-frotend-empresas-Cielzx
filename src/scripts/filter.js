
import { renderList } from "./render.js"
import { renderOptionsFiltred } from "./render.js"

function filterOptions(){

    const select = document.querySelector('.select-changes')
    const option = [...select]
    const ul = document.querySelector('.container-list')
    const company = JSON.parse(localStorage.getItem('companies'))
    console.log(select.value)
    const filterCompanies = []

    select.addEventListener('change',(e)=>{
        e.preventDefault()
        if(select.value === "selecionar"){
            ul.innerHTML =""
            return renderList()
        }

        const companyFilter = company.filter(element => element.sectors.description === select.value)
        renderOptionsFiltred(companyFilter)
    })



   
}


// company.filter((element,i,arr)=>{
//     select.forEach((options)=>{
        
//        options.addEventListener('change',(e)=>{
//         e.preventDefault()
//         const filter = options.value
//         if(filter === element.sectors.description){
//             filterCompanies.push(element)
//             ul.innerHTML = ""
//             renderOptionsFiltred(filterCompanies)
            
//         }else if(options.value == "selecionar"){
//             ul.innerHTML = ''
//             renderList()
//         }
//        })
        
//     })
   
// })

export {filterOptions}