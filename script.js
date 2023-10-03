/* SESSÃO VARIÁVEIS */
const ana = document.querySelector('.ana')
const tubo = document.querySelector('.tubo')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')

audioStart = new Audio('./song/mario-brega-funk.mp3')
audioGameOver = new Audio('./song/ze-da-manga.mp3')

/* FIM DA SESSÃO VARIÁVEIS */

const startGame = () => {
    tubo.classList.add('tubo-animation')
    start.style.display = 'none'

    audioStart.play()
}

const restartGame = () => {
    gameOver.style.display ='none'
    tubo.style.left = ''
    tubo.style.right = '0'

    ana.src = './imagens/anaGif.gif'
    ana.style.width = '160px'
    ana.style.bottom = '0'

    start.style.display = 'none'

    audioGameOver.pause()
    audioGameOver.currentTime = 0;

    audioStart.play()
    audioStart.currentTime = 0;

}

const jump = () => {
    ana.classList.add('jump')

    setTimeout(() => {
        ana.classList.remove('jump')
    }, 800);
}

const loop = () => {
    setInterval(() => {
        const tuboPosition = tubo.offsetLeft;
        const anaPosition = +window.getComputedStyle(ana).bottom.replace('px', '')

        if (tuboPosition <= 110 && tuboPosition > 0 && anaPosition < 120) {
            tubo.style.animation = 'none'
            tubo.style.left = `${tuboPosition}px`

            ana.style.animation = 'none'
            ana.style.bottom = `${anaPosition}px`


            ana.src = './imagens/anaTereza.png'
            ana.style.width = '130px'

            function stopAudioStart() {
                audioStart.pause()
            }
            stopAudioStart()

            audioGameOver.play()

            function stopAudio() {
                audioGameOver.pause()
            }
            
            gameOver.style.display = 'flex'
            
            clearInterval(loop)
        }
    }, 10);
}

loop()

document.addEventListener('keypress', e => {
    const tecla = e.key
    if(tecla === ' '){
        jump()
    }
})

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump()
    }
})

document.addEventListener('keypress', e => {
    const tecla = e.key 
    if(tecla === 'Enter'){
        startGame()
    }
})