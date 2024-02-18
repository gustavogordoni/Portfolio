function onLamp (acesa){
    var body = document.querySelector("body")
    body.style.backgroundColor = "white"
    body.style.color = "black"

    var h3 = document.querySelector("h3")
    h3.innerHTML = 'Lâmpada acesa'

    console.log(acesa)

    var dd = document.querySelector(".imgLamp")
    
    dd.src = acesa

    console.log(dd.src)
}

function offLamp (apagada){
    var body = document.querySelector("body")
    body.style.backgroundColor = "black"
    body.style.color = "white"

    console.log(apagada)

    var h3 = document.querySelector("h3")
    h3.innerHTML = 'Lâmpada apagada'

    var ee = document.querySelector(".imgLamp")
    
    ee.src = apagada

    console.log(ee.src)

}

