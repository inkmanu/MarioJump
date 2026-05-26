const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe')

const jump = ()=>{
    mario.classList.add ('jump') //vincula a animação á imagem

    setTimeout(() =>{
        mario.classList.remove('jump')
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //pega a posição da configuração computacional da imagem em Number graças ao +

    if(pipePosition<= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './imgs/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
},10)

document.addEventListener('keydown', jump)