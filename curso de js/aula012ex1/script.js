function carregar() {
    var msg =  document.querySelector('#msg')
    var img = document.querySelector('#image')
    var data = new Date()
    var hora = data.getHours()
    var msgBomdia = document.querySelector('#bom-dia')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=6 && hora < 12) {
        img.src = 'iimg/manhaa.jpg'
        msgBomdia.innerHTML = 'Bom dia!'
        document.body.style.background = '#fee756'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'iimg/taarde.jpeg'
        msgBomdia.innerHTML = 'Boa tarde!'
        document.body.style.background = '#f7ab07'
    } else {
        img.src = 'iimg/noite.jpeg'
        msgBomdia.innerHTML = 'Boa noite!'
        document.body.style.background = '#372d48'
    }
}   
