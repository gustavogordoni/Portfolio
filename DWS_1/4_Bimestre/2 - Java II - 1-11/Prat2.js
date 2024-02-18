function addParag(){
    const Modif = document.querySelector('div#texto')
    
    var addP = document.createElement('p')
    addP.textContent = 'Lorem impsum dolor sit amet'
    addP.style.fontSize = "20px"

    Modif.appendChild(addP)
}

function remParag(){
    var delP = document.querySelector('p')
    
    delP.remove()
}

function tdsParag(){
    var delTd = document.querySelector('#texto')

    delTd.innerHTML = ''
}