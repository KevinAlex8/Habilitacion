const urlServer ='http://localhost:2000'

const loaderContainer = document.querySelector('#loaderContainer')

async function customeFetch({path, method, body}){
    loaderContainer.style.display = 'flex'
    try{
        const res = await fetch(urlServer+path, {
            method,
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        return await res.json()
    }catch(e){
        console.log('e')
        alert("Algo salio mal")
    }finally{
        loaderContainer.style.display = 'none'
    }
}