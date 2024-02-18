function imgZoom(link){ 
    var imagem = document.querySelector(".img")
    imagem.style.visibility = 'visible'
    imagem.style.display = ''
    imagem.src = link

    var deleteX = document.querySelector(".x")
    deleteX.style.visibility = 'visible'
}

function remover(){
    var fecharImg = document.querySelector(".img")
    fecharImg.style.display = 'none'

    var deleteX = document.querySelector(".x")
    deleteX.style.visibility = 'hidden'
}
