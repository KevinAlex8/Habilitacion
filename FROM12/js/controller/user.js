async function getUsers(){
    const res = await customeFetch({
        path: '/users',
        method: 'GET',
    })
    return res.data
}

async function createUser(rol, estado, nickname, email, password){
    const res = await customeFetch({
        path: '/users',
        method: 'POST',
        body: {
            rol,
            estado,
            nickname,
            email,
            password
        }
    })
    return res
}

async function updateUser(i, newRol, newEstado, newNickname, newEmail, newPassword){
    const res = await customeFetch({
        path: '/users/'+i,
        method: 'PATCH',
        body: {
            rol: newRol,
            estado: newEstado,
            nickname: newNickname,
            email: newEmail,
            password: newPassword
        }
    })
    return res
    
}

async function deleteUser(i){
    return await customeFetch({
        path: '/users/'+i,
        method: 'DELETE'
    })
}
