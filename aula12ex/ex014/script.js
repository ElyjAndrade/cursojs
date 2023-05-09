function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
    //Bom dia #75c0ef//
    img.src = 'pexels-daniel-jurin-1835718.png'
    document.body.style.background = '#75c0ef'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde #F5D292//
        img.src = 'fototard.jpg'
        document.body.style.background = '#F5D292'
    } else {
        //Boa Noite #5A2F1E//
        img.src = 'fotonoite.png'
        document.body.style.background = '#5A2F1E'
    }
}

