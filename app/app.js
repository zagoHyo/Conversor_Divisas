function validacion(){
    cantidad_monetaria = document.querySelector('#cantidad_monetaria').value
    opcion_1 = document.getElementById('opcion_1').value
    opcion_2 = document.getElementById('opcion_2').value
    if(cantidad_monetaria == 0 || opcion_1 == 0 || opcion_2 == 0){
        console.log("llene campos")
        return
    }else{
        cargarApi()
    }
}

async function cargarApi() {
    try{
        const res = await fetch("https://dtony-404.github.io/API-s/Divisas/API.JSON")
        const data = await res.json()
        destructurarMoneda(data)
    }
    catch (error){
        console.log(error)
    }
}
const destructurarMoneda = (data) => {
    const {banderas,dolar,euro,libra_esterlina,peso_argentino,peso_colombiano,peso_mexicano,yen} = data
    // interestelas)
    if(opcion_1 != opcion_2){
    // Dolar
    if(opcion_1 == "Dolar"){
    switch (opcion_1, opcion_2){
        case "Dolar", "Euro":
            console.log(dolar.euro * cantidad_monetaria)
            break
        case "Dolar", "PesoColombiano":
            console.log(dolar.peso_colombiano * cantidad_monetaria)
            break
        case "Dolar", "PesoArgentino":
            console.log(dolar.peso_argentino * cantidad_monetaria)
            break
        case "Dolar", "PesoMexicano":
            console.log(dolar.peso_mexicano * cantidad_monetaria)
            break
        case "Dolar", "libraEstarlina":
            console.log(dolar.libra_esterlina * cantidad_monetaria)
            break
        case "Dolar", "Yen":
            console.log(dolar.yen * cantidad_monetaria)
            break
    }}
    // Euro
    else if(opcion_1 == "Euro"){
    switch (opcion_1, opcion_2){  
        case "Euro", "Dolar":
            console.log(euro.dolar_estadounidense * cantidad_monetaria)
            break
        case "Euro", "PesoColombiano":
            console.log(euro.peso_colombiano * cantidad_monetaria)
            break
        case "Euro", "PesoArgentino":
            console.log(euro.peso_argentino * cantidad_monetaria)
            break
        case "Euro", "PesoMexicano":
            console.log(euro.peso_mexicano * cantidad_monetaria)
            break
        case "Euro", "libraEstarlina":
            console.log(euro.libra_esterlina * cantidad_monetaria)
            break
        case "Euro", "Yen":
            console.log(euro.yen * cantidad_monetaria)
            break

    }}
    // Peso Colombiano
    else if(opcion_1 == "PesoColombiano"){
    switch (opcion_1, opcion_2){
        case "PesoColombiano", "Dolar":
            console.log(peso_colombiano.dolar_estadounidense * cantidad_monetaria)
            break
        case "PesoColombiano", "Euro":
            console.log(peso_colombiano.euro * cantidad_monetaria)
            break
        case "PesoColombiano", "PesoArgentino":
            console.log(peso_colombiano.peso_argentino * cantidad_monetaria)
            break
        case "PesoColombiano", "PesoMexicano":
            console.log(peso_colombiano.peso_mexicano * cantidad_monetaria)
            break
        case "PesoColombiano", "libraEstarlina":
            console.log(peso_colombiano.libra_esterlina * cantidad_monetaria)
            break
        case "PesoColombiano", "Yen":
            console.log(peso_colombiano.yen * cantidad_monetaria)
            break
    }}
    // Peso Argentino
    else if(opcion_1 == "PesoArgentino"){
        switch (opcion_1, opcion_2){
        case "PesoArgentino", "Dolar":
            console.log(peso_argentino.dolar_estadounidense * cantidad_monetaria)
            break
        case "PesoArgentino", "Euro":
            console.log(peso_argentino.euro * cantidad_monetaria)
            break
        case "PesoArgentino", "PesoColombiano":
            console.log(peso_argentino.colombiano * cantidad_monetaria)
            break
        case "PesoArgentino", "PesoMexicano":
            console.log(peso_argentino.peso_mexicano * cantidad_monetaria)
            break
        case "PesoArgentino", "libraEstarlina":
            console.log(peso_argentino.libra_esterlina * cantidad_monetaria)
            break
        case "PesoArgentino", "Yen":
            console.log(peso_argentino.yen * cantidad_monetaria)
            break
    }}
    // Peso Mexicano
    else if(opcion_1 == "PesoMexicano"){
    switch (opcion_1, opcion_2){
        case "PesoMexicano", "Dolar":
            console.log(peso_mexicano.dolar_estadounidense)
            break
        case "PesoMexicano", "Euro":
            console.log(peso_mexicano.euro * cantidad_monetaria)
            break
        case "PesoMexicano", "PesoColombiano":
            console.log(peso_mexicano.peso_colombiano * cantidad_monetaria)
            break
        case "PesoMexicano", "PesoArgentino":
            console.log(peso_mexicano.peso_argentino * cantidad_monetaria)
            break
        case "PesoMexicano", "libraEstarlina":
            console.log(peso_mexicano.libra_esterlina * cantidad_monetaria)
            break
        case "PesoMexicano", "Yen":
            console.log(peso_mexicano.yen * cantidad_monetaria)
            break
    }}
    // libra_esterlina
    else if(opcion_1 == "libraEstarlina"){
    switch (opcion_1, opcion_2){
        case "libraEstarlina", "Dolar":
            console.log(libra_esterlina.dolar_estadounidense)
            break
        case "libraEstarlina", "Euro":
            console.log(libra_esterlina.euro * cantidad_monetaria)
            break
        case "libraEstarlina", "PesoColombiano":
            console.log(libra_esterlina.peso_colombiano * cantidad_monetaria)
            break
        case "libraEstarlina", "PesoArgentino":
            console.log(libra_esterlina.peso_argentino * cantidad_monetaria)
            break
        case "libraEstarlina", "PesoMexicano":
            console.log(libra_esterlina.peso_mexicano * cantidad_monetaria)
            break
        case "libraEstarlina", "Yen":
            console.log(libra_esterlina.yen * cantidad_monetaria)
            break
    }}
    // Yen
    else if(opcion_1 == "Yen"){
    switch (opcion_1, opcion_2){
        case "Yen", "Dolar":
            console.log(yen.dolar_estadounidense)
            break
        case "Yen", "Euro":
            console.log(yen.euro * cantidad_monetaria)
            break
        case "Yen", "PesoColombiano":
            console.log(yen.peso_colombiano * cantidad_monetaria)
            break
        case "Yen", "PesoArgentino":
            console.log(yen.peso_argentino * cantidad_monetaria)
            break
        case "Yen", "PesoMexicano":
            console.log(yen.peso_mexicano * cantidad_monetaria)
            break
        case "Yen", "libraEstarlina":
            console.log(yen.libra_esterlina * cantidad_monetaria)
            break
    }}}
    else{
        console.log(cantidad_monetaria)
    }
}