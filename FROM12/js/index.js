const body = document.querySelector('body');
const tbody = document.querySelector ('tbody')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const inRol = document.querySelector('#inRol')
const inEstado = document.querySelector('#inEstado')
const inNickName = document.querySelector('#inNickName')
const inEmail = document.querySelector('#inEmail')
const inPassword = document.querySelector('#inPassword')

btnAddUpdate.onclick = btnAddUser

body.onload = () => {
    fillTable()
}
    function createRow(u, i){
        const tr = document.createElement('tr')
    
        const tdDelete = document.createElement('td')
        const iDelete = document.createElement('i')
        iDelete.className = 'far fa-trash-alt'
        iDelete.onclick = async () => {
            const isConfirm = confirm('Deseas eliminar')
            if(isConfirm){
                const res = await deleteUser(i)
                if(res.statusCode === 200){
                    clearTable()
                    fillTable()
                }
                alert(res.message)
            }
        }
    
    
        const tdUpdate = document.createElement('td')
        const iUpdate = document.createElement('i')
        iUpdate.className ='fas fa-pen'
        iUpdate.onclick = () => {
            btnAddUpdate.textContent = 'Actualizar'
            inRol.value = u.rol
            inEstado.value = u.estado
            inNickName.value = u.nickname
            inPassword.value = u.password
            inEmail.value = u.email
            btnAddUpdate.onclick = (e) => btnUpdateUser(e, i)
        
        }   
    
        const tdRol = document.createElement('td')
        tdRol.textContent = u.rol

        const tdEstado = document.createElement('td')
        tdEstado.textContent = u.estado

        const tdNickName = document.createElement('td')
        tdNickName.textContent = u.nickname
       
        const tdEmail = document.createElement('td')
        tdEmail.textContent = u.email
        
        const tdPassword = document.createElement('td')
        tdPassword.textContent = u.password
        
        tdDelete.appendChild(iDelete)
        tdUpdate.appendChild(iUpdate)
    
        tr.append(tdDelete, tdUpdate, tdRol, tdEstado, tdNickName, tdEmail, tdPassword)
    
        return tr;
    }

async function btnAddUser(e){
    e.preventDefault()
    const i = (await getUsers()).length
    const res = await createUser(inRol.value, inEstado.value, inNickName.value, inEmail.value, inPassword.value)
    if(res.statusCode === 201){
        const newUser = res.data;
        const tr = createRow(newUser, i)
        tbody.appendChild(tr)
    }
    alert(res.message)

}

async function btnUpdateUser(e, i){
    e.preventDefault()
    const res = await updateUser(i,inRol.value, inEstado.value, inNickName.value, inEmail.value, inPassword.value)
    if(res.statusCode === 200){
        clearTable()
        fillTable()
        inRol.value = ''
        inEstado.value = ''
        inNickName.value = ''
        inEmail.value = ''
        inPassword.value = ''
        btnAddUpdate.textContent = 'Agregar'
        btnAddUpdate.onclick = btnAddUser
    }
    alert(res.message)
}
function clearTable(){
    tbody.innerHTML = ''
}
async function fillTable(){
    let trs = [];  
    const users = await getUsers();
    users.forEach((u, i)=>{
        const tr = createRow(u, i)
        trs.push(tr)
    })
     
    tbody.append(...trs)
   
} 