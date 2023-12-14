const historia = [
    {
        texto: "Olá astronauta    , que planeta pretende representar? :",
        escolhas: [
            { opcao: "Cromulent", nextPage: 1 },
            { opcao: "Sonder", nextPage: 1 },
            { opcao: "Mellifluous", nextPage: 1 }
        ]
    },
    {
        texto: "Em breve irá embarcar numa viagem pela galáxia, em que nave pertende embarcar? :",
        escolhas: [
            { opcao: "Nave Espacial Estrelar", nextPage: 2 },
            { opcao: "Nave Espacial Luar", nextPage: 6 },
            { opcao: "Nave Espacial Solar", nextPage: 13 }
        ]
    },
    {
        texto: "Na sua Nave Espacial Estrelar, chega a um planeta desconhecido chamado Épocaflorar. Escolha a sua ação:",
        escolhas: [
            { opcao: "Explorar a superfície", nextPage: 3 },
            { opcao: "Continuar a viagem", nextPage: 7 }
        ]
    },
    {
        texto: "Apos chegar no planeta desconhecido, a inteligencia artificial de bordo sugere analisar amostras de solo. Escolha a sua ação:",
        escolhas: [
            { opcao: "Analisar amostras de solo", nextPage: 4 },
            { opcao: "Continuar a viagem", nextPage: 14 }
        ]
    },
    {
        texto: "Recebeu as suas amostras apartir da i.a. de bordo e descobriu que    . Realmente uma descoberta Revolucionária!. Escolha a sua ação:",
        escolhas: [
            { opcao: "Voltar para o seu planeta", nextPage: 5 },
        ]
    },
    {
        texto: "PARABÉNS! A sua viagem espacial trouxe a       para os habitantes do seu planeta! Devido aos seus descobrimentos ganhou um prémio e foi reconhecido por toda a galáxia. Infelizmente a sua viagem acabou! Obrigada Astraunata!",
        escolhas: [
            { opcao: "Tente Novamente", nextPage: 1 },
        ]
    },
    {
        texto: "Na sua Nave Espacial Luar, descobre uma anomalia quando chega a um planeta desconhecido chamado   . Escolha a sua ação:",
        escolhas: [
            { opcao: "Analisar a anomalia", nextPage: 7 },
            { opcao: "Continuar a viagem", nextPage: 14 }
        ]
    },
    {
        texto: "Apos analisar uma anomalia de um pais desconhecido descobre um portal para outra dimensão. Escolha a sua ação:",
        escolhas: [
            { opcao: "Ir para outra dimensão", nextPage: 8 },
            { opcao: "Continuar a viagem", nextPage: 3 }
        ]
    },
    {
        texto: "Ao chegar na outra dimensão deparasse com um mundo repleto de encanto, onde as casas são feitas de cogumelos e os animais de estimação são dragões magestosos, um mundo onde a magia defenitivamente prevelece. Escolha a sua ação:",
        escolhas: [
            { opcao: "Explorar a paisagem", nextPage: 9 },
            { opcao: "Interagir com os dragões", nextPage: 10 }
        ]
    },
    {
        texto: "Ao explorar a paisagem descobre um lago magico, onde a agua torna quem a beber mais forte e saudavel. Escolha a sua ação:",
        escolhas: [
            { opcao: "Trazer agua consigo e voltar para o seu planeta", nextPage: 11 },
            { opcao: "Voltar para o seu planeta de mãos a abanar", nextPage: 17 }
        ]
    },
    {
        texto: "Ao interagir com os dragões conhece um aldeão do planeta chamado Chip, apos longas horas de conversa e de aprendizagens sobre dragões Chip torna-se um bom conhecido, e devido a grande quantidade de dragões no planeta decide oferecer-lhe ovos de dragão para levar para o seu planeta. Escolha a sua ação:",
        escolhas: [
            { opcao: "Trazer os ovos consigo para o seu planeta", nextPage: 12 },
            { opcao: "Voltar para o seu planeta de mãos a abanar", nextPage: 17 }
        ]
    },
    {
        texto: "PARABÉNS! A sua viagem espacial trouxe a forticação dos idosos do seu planeta e do futuro das suas crianças! Devido aos seus descobrimentos ganhou um prémio e foi reconhecido por toda a galáxia. Infelizmente a sua viagem acabou! Obrigada Astraunata!. Escolha a sua ação:",
        escolhas: [
            { opcao: "Tente Novamente", nextPage: 1 },
        ]
    },
    {
        texto: "PARABÉNS! A sua viagem espacial trouxe uma linda e magestosa nova forma de navegação para o teu planeta! Devido aos teus descobrimentos ganhas-te um prémio e foste reconhecido por toda a galáxia. Infelizmente a tua viagem acabou! Obrigada Astraunata! Escolha a sua ação:",
        escolhas: [
            { opcao: "Tente Novamente", nextPage: 1 },
        ]
    },
    {
        texto: "Com a sua Nave Espacial Solar, encontra vida extraterrestre num planeta chamado Inefável. Escolha a sua ação:",
        escolhas: [
            { opcao: "Estabelecer contacto", nextPage: 14 },
            { opcao: "Observar à distância", nextPage: 7 }
        ]
    },
    {
        texto: "Depois de estabelecer contacto a vida extraterrestre revela conhecimentos avançados. Deseja trocar informações? Escolha a sua ação:",
        escolhas: [
            { opcao: "Trocar informações", nextPage: 15 },
            { opcao: "Continuar a viagem", nextPage: 3 }
        ]
    },
    {
        texto: "Depois de trocar informações tem a oportunidade de trazer a vida infinita para o seu planeta. O que decide fazer? Escolha a sua ação:",
        escolhas: [
            { opcao: "Trazer vida infinita para o seu planeta", nextPage: 13 },
            { opcao: "Regressar de mãos a abanar", nextPage: 17 }
        ]
    },
    {
        texto: "PARABÉNS! A sua viagem espacial trouxe a vida infinita para os habitantes do seu planeta! Devido aos seus descobrimentos ganhou um prémio e foi reconhecido por toda a galáxia. Infelizmente a sua viagem acabou! Obrigada Astraunata!",
        escolhas: [
            { opcao: "Tente Novamente", nextPage: 1 },
        ]
    },
    {
        texto: "Infelizmente a sua viagem espacial acabou e voltou para o seu planeta sem nenhuma descoberta da galáxia. Obrigada por embarcares, secalhar numa próxima aventura encontras um mundo paralelo e conheces uma diferente versão de ti... Infelizmente a tua viagem acabou! Obrigada Astraunata!. Escolha a sua ação:",
        escolhas: [
            { opcao: "Tente Novamente", nextPage: 1 },
        ]
    },
]
let paginaAtual = 0; 

function avancarParaProximaPagina(nextPage) {
    
    if (historia[nextPage]) {
        
        paginaAtual = nextPage;

        
        atualizarPagina();
    }
}
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('choice')) {
        const nextPage = event.target.getAttribute('data-next-page');
        avancarParaProximaPagina(parseInt(nextPage));
    }
});

function atualizarPagina() {
    const storyTextElement = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    
    storyTextElement.textContent = historia[paginaAtual].texto;

   
    choicesContainer.innerHTML = '';

   
    historia[paginaAtual].escolhas.forEach((escolha, index) => {
        const choiceElement = document.createElement('button');
        choiceElement.classList.add('choice');
        choiceElement.textContent = escolha.opcao;
        choiceElement.setAttribute('data-next-page', escolha.nextPage);

        
        choicesContainer.appendChild(choiceElement);
    });
}

atualizarPagina();

