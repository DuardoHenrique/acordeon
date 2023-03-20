const arrow = document.getElementsByClassName('arrow')
const text = document.getElementsByClassName('text')



for (let index = 0; index < arrow.length; index++) {
    arrow[index].onclick = function() {
        if (arrow[index].classList[1] !== 'acionado') {
            naoAcionado(index);
        } else if (arrow[index].classList[1] == 'acionado') {
            acionado(index);
        }
        const itemAcionadoAtual = document.querySelector('.acionado')
        console.log(itemAcionadoAtual)
    }    
}  

function naoAcionado(index) {
    arrow[index].classList.add('acionado')
    text[index].classList.remove('invisible')
    arrow[index].src = './src/img/seta-aberta.png'
}

function acionado(index) {
    arrow[index].classList.remove('acionado')
    text[index].classList.add('invisible')
    arrow[index].src = './src/img/seta.png'
}