const toast = (title,Dir,Mensage)=>{
    const body = document.querySelector('body')
    const container= document.createElement('div')
    const divImage = document.createElement('div')
    container.classList.add('toast-container')
    const icon = document.createElement('img')
    divImage.classList.add('toast-image')

    const h3 = document.createElement('h3')
    const divTi = document.createElement('div')
    divTi.classList.add('title-succes')
    const divp = document.createElement('div')
    divp.classList.add('p-redirection')
    divTi.classList.add('toast-text')
    h3.innerText = `${Dir}`
    const p = document.createElement('p')
   
    const a = document.createElement('a')
    p.innerText = `${Mensage}`

    if(title == "Sucesso"){
        container.classList.add('toast-succes')
        
    }else{
        container.classList.toggle('toast-container-error')
    }


    
    divp.append(p)
    divTi.append(h3)
    container.append(divTi,divp)
    body.append(container)


}

export default toast