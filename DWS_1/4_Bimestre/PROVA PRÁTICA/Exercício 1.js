function teclas(){
    
    if(event.keyCode == "40"){

        console.log(event.keyCode)
        var sla = document.querySelector("body")
        sla.style.backgroundColor = "yellow"

        var h2 = document.querySelector("h2")
        h2.innerHTML = 'PARA BAIXO'

        var img = document.querySelector("img")
        img.src = 'seta-baixo.png'

        console.log(event.keyCode)

    }
    
    if(event.keyCode == "38"){
        var sla = document.querySelector("body")
        sla.style.backgroundColor = "green"

        var h2 = document.querySelector("h2")
        h2.innerHTML = 'PARA CIMA'

        var img = document.querySelector("img")
        img.src = 'seta-cima.png'

    }
}    