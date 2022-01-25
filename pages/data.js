
const banshee = {
    name: 'Banshee',
    evidence: ['ORBS', 'DIGITAIS', 'DOTS'],
    info: 'Banshee é um fantasma que ao início da partida, escolhe um alvo para caça-lo até que o jogador morra ou saia do jogo, escolhendo assim, um novo alvo. Caso o alvo esteja do lado de fora da casa quando a caçada começar, ele irá agir como qualquer outro fantasma e caçar qualquer um que esteja na casa.',
    traits: [
        'Ao caçar, apenas um jogador será o alvo, ignorando todos os outros até que o alvo morra. Apenas o alvo pode completar a missão "Repelir um fantasma com incenso".',
        'O crucifixo tem seu alcance aumentado contra este fantasma, aumentando de 3 metros para 5 metros.',
    ],
    strategies: [
        '(Apenas multiplayer) Antes de tudo, o alvo deve ser identificado. Para fazer isso, todos os jogadores devem estar estar presentes durante a caçada, alguns escondidos e os outros serão as "iscas". A ideia é tentar chamar a atenção do fantasma, caso o fantasma não mude de alvo durante a caçada e nas seguintes, é um Banshee',
        'Após o alvo ser identificado, ele deve permanecer dentro da casa e bem escondido enquanto os outros vagam livremente atrás dos objetivos da missão.',
        'Os outros jogadores (fora o alvo) podem andar livremente dentro da casa durante a caçada.',
        `Utilizando um "Microfone Direcional", um banshee tem chances de emitir um grito (apenas ele faz isso) que pode ser ouvido pelos jogadores próximo ao portador.`
    ]
};

const demonio = {
    name: 'Demônio',
    evidence: ['TEMPERATURA', 'DIGITAIS', 'ESCRITA'],
    info: 'Os demônios são os fantasmas mais perigosos, pois caçam com mais frequência que os demais.',
    traits: [
        'Possui uma pequena chance de iniciar uma caçada no início da missão.',
        'Ele pode iniciar uma caçada a qualquer momento quando a sanidade estiver abaixo de 70% (o normal sendo abaixo de 50%).',
        'O incenso previne uma caçada por um tempo menor que os demais.',
        'Usar objetos amaldiçoados drenará menos sanidade.'
    ]
};

/* OBJETOS AMALDIÇOADOS */

const cards = {
    name: 'Cartas Tarô',
    info: 'As cartas de tarô se referem à um deck com 10 cartas aleatórias, podendo conter cartas repetidas. Cada uma possui um efeito diferente, podendo ser "puxada" apenas dentro do local à ser investigado. JAMAIS utilize as cartas durante uma caçada, pois ela terá o seu efeito anulado e irá sumir do deck. Tire uma foto das cartas antes de utiliza-las, pois o deck irá sumir após todas as 10 terem sido retiradas.',
    effects: [
        {
            name: 'The Sun',
            effect: 'Restaura a sanidade em 100%.'
        },
        {
            name: 'The Moon',
            effect: 'Sanidade decai para 0%.'
        },
        {
            name: 'The Tower',
            effect: 'Causa uma interação.'
        },
        {
            name: 'The Wheel of Fortune',
            effect: 'Caso a carta queime verde, aumenta 25% da sanidade. Caso queime vermelho, perde 25%.'
        },
        {
            name: 'The Devil',
            effect: 'Ativa um evento paranormal.'
        },
        {
            name: 'The High Priestess',
            effect: 'Revive um jogador aleatório onde ele morreu.'
        },
        {
            name: 'The Hanged Man',
            effect: 'Mata o jogador imediatamente.'
        },
        {
            name: 'Death',
            effect: 'Inicia uma caçada amaldiçoada.'
        },
        {
            name: 'The Hermit',
            effect: 'Prende o fantasma em seu local por 1 minuto.'
        },
        {
            name: 'The Fool',
            effect: 'Aparece uma carta antes e logo em seguida, aparece esta. Não possui efeito.'
        }
    ]
}


export default function Data(par) {
    if (par === 'banshee') {
        return banshee;
    }
    else if (par === 'demonio') {
        return demonio;
    }
    else if (par === 'cards') {
        return cards;
    }
    else {
        return null;
    }
}