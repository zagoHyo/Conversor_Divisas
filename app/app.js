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
            Swal.fire({
                title: `${dolar.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Dolar", "PesoColombiano":
            Swal.fire({
                title: `${dolar.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Dolar", "PesoArgentino":
            Swal.fire({
                title: `${dolar.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Dolar", "PesoMexicano":
            Swal.fire({
                title: `${dolar.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Dolar", "libraEstarlina":
            Swal.fire({
                title: `${dolar.libra_esterlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Dolar", "Yen":
            Swal.fire({
                title: `${dolar.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}
    // Euro
    else if(opcion_1 == "Euro"){
    switch (opcion_1, opcion_2){  
        case "Euro", "Dolar":
            Swal.fire({
                title: `${euro.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Euro", "PesoColombiano":
            Swal.fire({
                title: `${euro.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Euro", "PesoArgentino":
            Swal.fire({
                title: `${euro.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Euro", "PesoMexicano":
            Swal.fire({
                title: `${euro.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Euro", "libraEstarlina":
            Swal.fire({
                title: `${euro.libra_esterlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Euro", "Yen":
            Swal.fire({
                title: `${euro.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break

    }}
    // Peso Colombiano
    else if(opcion_1 == "PesoColombiano"){
    switch (opcion_1, opcion_2){
        case "PesoColombiano", "Dolar":
            Swal.fire({
                title: `${peso_colombiano.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoColombiano", "Euro":
            Swal.fire({
                title: `${peso_colombiano.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoColombiano", "PesoArgentino":
            Swal.fire({
                title: `${peso_colombiano.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoColombiano", "PesoMexicano":
            Swal.fire({
                title: `${peso_colombiano.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoColombiano", "libraEstarlina":
            Swal.fire({
                title: `${peso_colombiano.libra_esterlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoColombiano", "Yen":
            Swal.fire({
                title: `${peso_colombiano.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}
    // Peso Argentino
    else if(opcion_1 == "PesoArgentino"){
        switch (opcion_1, opcion_2){
        case "PesoArgentino", "Dolar":
            Swal.fire({
                title: `${peso_argentino.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoArgentino", "Euro":
            Swal.fire({
                title: `${peso_argentino.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoArgentino", "PesoColombiano":
            Swal.fire({
                title: `${peso_argentino.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoArgentino", "PesoMexicano":
            Swal.fire({
                title: `${peso_argentino.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoArgentino", "libraEstarlina":
            Swal.fire({
                title: `${peso_argentino.libra_esterlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoArgentino", "Yen":
            Swal.fire({
                title: `${peso_argentino.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}
    // Peso Mexicano
    else if(opcion_1 == "PesoMexicano"){
    switch (opcion_1, opcion_2){
        case "PesoMexicano", "Dolar":
            Swal.fire({
                title: `${peso_mexicano.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoMexicano", "Euro":
            Swal.fire({
                title: `${peso_mexicano.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoMexicano", "PesoColombiano":
            Swal.fire({
                title: `${peso_mexicano.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoMexicano", "PesoArgentino":
            Swal.fire({
                title: `${peso_mexicano.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoMexicano", "libraEstarlina":
            Swal.fire({
                title: `${peso_mexicano.libra_esterlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "PesoMexicano", "Yen":
            Swal.fire({
                title: `${peso_mexicano.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}
    // libra_esterlina
    else if(opcion_1 == "libraEstarlina"){
    switch (opcion_1, opcion_2){
        case "libraEstarlina", "Dolar":
            Swal.fire({
                title: `${libra_esterlina.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "libraEstarlina", "Euro":
            Swal.fire({
                title: `${libra_esterlina.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "libraEstarlina", "PesoColombiano":
            Swal.fire({
                title: `${libra_esterlina.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "libraEstarlina", "PesoArgentino":
            Swal.fire({
                title: `${libra_esterlina.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "libraEstarlina", "PesoMexicano":
            Swal.fire({
                title: `${libra_esterlina.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "libraEstarlina", "Yen":
            Swal.fire({
                title: `${libra_esterlina.yen * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}
    // Yen
    else if(opcion_1 == "Yen"){
    switch (opcion_1, opcion_2){
        case "Yen", "Dolar":
            Swal.fire({
                title: `${yen.dolar_estadounidense * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Yen", "Euro":
            Swal.fire({
                title: `${yen.euro * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Yen", "PesoColombiano":
            Swal.fire({
                title: `${yen.peso_colombiano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Yen", "PesoArgentino":
            Swal.fire({
                title: `${yen.peso_argentino * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Yen", "PesoMexicano":
            Swal.fire({
                title: `${yen.peso_mexicano * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
        case "Yen", "libraEstarlina":
            Swal.fire({
                title: `${yen.libraEstarlina * cantidad_monetaria}`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://internetpasoapaso.com/wp-content/uploads/sonic-the-hedgehog-1.gif")
                  center top
                  no-repeat
                `
              })
            break
    }}}
    else{
        Swal.fire({
            title: `${cantidad_monetaria}`,
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media2.giphy.com/media/1jWbVxpRQG2xsEcMPN/200.gif")
              center top
              no-repeat
            `
          })
    }
}