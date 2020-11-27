function  verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[erro] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.querySelector('#image')
        if (fsex[0].checked) {
                genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = './img/menino.jpeg'
            } else if (idade < 21) {
                img.src = './img/jovem.jpeg'
            } else if (idade < 60) {
                img.src = './img/homem.jpeg'
            } else {
                img.src = './img/voo.jpeg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = './img/menina.jpeg'
            } else if (idade < 21) {
                img.src = './img/mulherjovem.jpeg'
            } else if (idade < 60) {
                img.src = './img/mulher.jpeg'
            } else {
                img.src = './img/vovo.jpeg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
