function addLi(){
    var Modif = document.querySelector('ul#texto')
    
    var addP = document.createElement('li')
    addP.textContent = 'Lorem Impsum'
    
    Modif.appendChild(addP)
}

function removeLi(){
    var delLi = document.querySelector('li')
    
    delLi.remove()
}
function tdsLi(){
    var delTd = document.querySelector('#texto')

    delTd.innerHTML = ''
}