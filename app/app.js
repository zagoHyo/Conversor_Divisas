document.addEventListener('DOMContentLoaded', () => {
    cargarApi()
})

async function cargarApi() {
    try{
        const res = await fetch("https://dtony-404.github.io/API-s/Divisas/API.JSON")
        const data = await res.json()
        console.log(data.banderas)
    }
    catch (error){
        console.log(error)
    }
}