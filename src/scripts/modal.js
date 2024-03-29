const openModal = (children) => {
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainConatiner = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background") 
    mainConatiner.classList.add("modal-container") 
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

    mainConatiner.appendChild(closeModalButton)
    mainConatiner.append(children)
    backgroundContainer.appendChild(mainConatiner)
    body.appendChild(backgroundContainer)
}


const openModalVisualizer = (children) => {
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainConatiner = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background") 
    mainConatiner.classList.add("modal-container-visualizador") 
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

    mainConatiner.appendChild(closeModalButton)
    mainConatiner.append(children)
    backgroundContainer.appendChild(mainConatiner)
    body.appendChild(backgroundContainer)
}


const openModalEdit = (children) => {
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainConatiner = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background") 
    mainConatiner.classList.add("modal-container-edit") 
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

    mainConatiner.appendChild(closeModalButton)
    mainConatiner.append(children)
    backgroundContainer.appendChild(mainConatiner)
    body.appendChild(backgroundContainer)
}

const openModalDel = (children) => {
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainConatiner = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background") 
    mainConatiner.classList.add("modal-container-delete") 
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

    mainConatiner.appendChild(closeModalButton)
    mainConatiner.append(children)
    backgroundContainer.appendChild(mainConatiner)
    body.appendChild(backgroundContainer)
}

export {openModal,openModalVisualizer,openModalEdit,openModalDel}