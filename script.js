const htmlHome = document.getElementById('html');

const focoBt = document.getElementById('botaoFoco');
const curtoBt = document.getElementById('botaoCurto');
const longoBt = document.getElementById('botaoLongo');
const botaoIniciar = document.getElementById('start-pause');
const spanElemento = botaoIniciar.querySelector('span');
const imgElemento = botaoIniciar.querySelector('img');
const tempoNaTela = document.getElementById('timer');    

const displayTempo = document.getElementById('timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/Interstelar.mp3');
const musicaPausa = new Audio('./sons/pause.mp3');
const musicaIniciar = new Audio('./sons/play.wav');
const musicaAcabou = new Audio('./sons/beep.mp3');



musica.loop = true;

let tempoDecorrido = 1500;
let duracaoDescansoCurto = 300;
let duracaoDescansoLongo = 900;

let intervaloId = null;


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

// BOTÃO FOCO
focoBt.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco')
    focoBt.classList.add('active');
})

// BOTÃO CURTO
curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

// BOTÃO LONGO
longoBt.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo')
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo(tempoDecorrido)
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
    htmlHome.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
             <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }
}

const contagem = () => {
    if (tempoDecorrido <= 0) {
        musicaAcabou.play();
        alert('Tempo finalizado')
        const focoAtivo = htmlHome.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento);
        }
        zerar()
        return
    }
    tempoDecorrido -= 1
    mostrarTempo();
}

botaoIniciar.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    musicaIniciar.play();
    spanElemento.innerHTML = 'Pause';
    imgElemento.setAttribute('src', './imagens/pause.png');
    if (intervaloId) {
        if (spanElemento.innerHTML = 'Começar') {
            musicaPausa.play();
            musicaIniciar.pause();
            spanElemento.innerHTML = 'Começar';
            imgElemento.setAttribute('src', './imagens/play_arrow.png');
        }
        zerar()
        return
    }
    intervaloId = setInterval(contagem, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();