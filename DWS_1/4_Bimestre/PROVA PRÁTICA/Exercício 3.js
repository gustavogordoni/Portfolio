function click(link){

    console.log(link)

    var del = document.querySelector('img')
    del.remove()

    var Modif = document.querySelector(".img")
    
    var add = document.createElement('img')
    add.src = link
    
    Modif.appendChild(add)
}