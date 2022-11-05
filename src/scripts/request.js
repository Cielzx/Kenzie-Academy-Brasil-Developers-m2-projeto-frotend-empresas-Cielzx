import toast from "./toast.js"


const baseUrl = "http://localhost:6278/"

async function createUser(body){
    const request = await fetch("http://localhost:6278/auth/register",{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    if(request.ok){
        const response = await request.json()
        console.log(response)
        toast('Sucesso',"criação de usuario bem sucedida","Você ja pode prosseguir para o login")
        setTimeout(() => {
            window.location.replace('../login/index.html')
            
        }, 3000);
    }else{
        toast("Erro","Algo deu errado", "verifique os campos")
    }
}


async function validateUser(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'auth/validate_user',{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    console.log(response)
    localStorage.setItem('adm',JSON.stringify(response))
    return response
}




async function login(body){
    try{
         const request = await fetch("http://localhost:6278/auth/login",{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })

    // const validar = JSON.parse(localStorage.getItem('adm'))


    if(request.ok){
        const response = await request.json()
        const token =  localStorage.setItem("Token",JSON.stringify(response))
        const validar = await validateUser()
        if(validar.is_admin === false){
            console.log(response)
            toast('Sucesso',"Logado com sucesso","Ola")
              setTimeout(() => {
                window.location.replace('../userDash/index.html')
                
            }, 4000);
    
           }else{
            window.location.assign('../admDash/index.html')
           }

        
    }else{
        toast("Erro","Algo deu errado", "verifique os campos")
    }
    }catch(err){
        console.log('err')
    }
   
   
}


async function listOfComapny(){
    const request = await fetch(baseUrl +'companies',{
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        },
    })

    const response = await request.json()
    localStorage.setItem('companies',JSON.stringify(response))
    return response
}


async function listOfDepartments(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'departments',{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    return response
}


async function listOfUser(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'users',{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    localStorage.setItem('cadastrados',JSON.stringify(response))
    return response
    
}


async function createDepart(body){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl + "departments",{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
        body: JSON.stringify(body)
    })
        const response = await request.json()
        console.log(response)
       
   
}



async function editDepart(body,id){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl + `departments/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
        body: JSON.stringify(body)
    })
        const response = await request.json()
        return response
}


async function deleteDepart(id){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl + `departments/${id}`,{
        method: 'DELETE',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })
        const response = await request.json();
       return response
}

async function getUserProfiles(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'users/profile',{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    console.log(response)
    return response
    
}


async function getUserOutOfWork(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'admin/out_of_work',{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    return response
    
}

async function hireFunction(body){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'departments/hire/',{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`,
        },
        body: JSON.stringify(body)
    })

    const response = await request.json()
    console.log(response)
    return response
    
}


async function dissmissFun(id){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +`departments/dismiss/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`,
        },
    })

    const response = await request.json()
    console.log(response)
    return response
    
}


async function updateUser(body,id){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +`admin/update_user/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`,
        },
        body: JSON.stringify(body)
    })

    const response = await request.json()
    console.log(response)
    return response
    
}

async function deleteUser(id){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl + `admin/delete_user/${id}`,{
        method: 'DELETE',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })
        const response = await request.json();
       return response
}


async function listOfCooworkes(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +`users/departments/coworkers`,{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    
    return response[0].users
    
}

async function listDepartUser(){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +`users/departments`,{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`
        },
    })

    const response = await request.json()
    return response
    
}

async function updaUserStatus(body){
    const info = JSON.parse(localStorage.getItem('Token'))
    const request = await fetch(baseUrl +'users',{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${info.token}`,
        },
        body: JSON.stringify(body)
    })

    const response = await request.json()
    console.log(response)
    return response
    
}

export {createUser,login,listOfComapny,getUserProfiles,validateUser,listOfDepartments,listOfUser,createDepart,editDepart,deleteDepart,hireFunction,getUserOutOfWork,dissmissFun,updateUser,deleteUser,listOfCooworkes,listDepartUser,updaUserStatus}