
const banshee = {
    name: 'Banshee',
    evidence: ['ORBS', 'DIGITAIS', 'DOTS'],
    info: 'Banshee é um fantasma que ao início da partida, escolhe um alvo para caça-lo até que o jogador morra ou saia do jogo, escolhendo assim, um novo alvo. Caso o alvo esteja do lado de fora do local da investigação quando a caçada começar, ele irá agir como qualquer outro fantasma e caçar qualquer um que esteja no dentro do local.',
    traits: [
        'Ao caçar, apenas um jogador será o alvo, ignorando todos os outros até que o alvo morra. Apenas o alvo pode completar a missão "Repelir um fantasma com incenso".',
        'O crucifixo tem seu alcance aumentado contra este fantasma, aumentando de 3 metros para 5 metros.',
    ],
    strategies: [
        '(Apenas multiplayer) Antes de tudo, o alvo deve ser identificado. Para fazer isso, todos os jogadores devem estar estar presentes durante a caçada, alguns escondidos e os outros serão as "iscas". A ideia é tentar chamar a atenção do fantasma, caso o fantasma não mude de alvo durante a caçada e nas seguintes, é um Banshee.',
        'Após o alvo ser identificado, ele deve permanecer dentro do local da investigação e bem escondido enquanto os outros vagam livremente atrás dos objetivos da missão.',
        'Os outros jogadores (fora o alvo) podem andar livremente dentro do local da investigação durante a caçada.',
        `Utilizando um "Microfone Direcional", um Banshee tem chances de emitir um grito (apenas ele faz isso) que pode ser ouvido pelos jogadores próximo ao portador.`,
        'Caso o alvo esteja no local de investigação, quando o Banshee iniciar um ataque, ele tende a estar sempre perto do alvo.'
    ],
    strength: 'Caçará um jogador por vez.',
    weakness: 'Crucifixo aumentado para 5m.',

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
    ],
    strength: 'Iniciará caçadas com mais frequência.',
    weakness: 'Perderá menos sanidade usando objetos amaldiçoados.',

};

const goryo = {
    name: 'Goryo',
    evidence: ['EMF5', 'DIGITAIS', 'DOTS'],
    info: 'O Goryo é conhecido por apenas mostrar sua silhueta no DOTS através da câmera e não pode ser vista sem ela.',
    traits: [
        'A silhueta do Goryo só pode ser vista através da câmera quando, não houver nenhum jogador na sala do fantasma.',
        'Um Goryo dificilmente sai da sua sala para perambular enquanto não estiver caçando!.',
        'Ele ainda aparece em eventos paranormais e durante a caçada!.'
    ],
    strategies: [
        'Na dificuldade Pesadelo, o Goryo sempre terá como evidência o DOTS, caso durante a investigação seja encontrado EMF5 e DIGITAIS, o Goryo pode ser desconsiderado!.',
        'Um Goryo pode ser identificado através do DOTS, coloque o DOTS na sala do fantasma e saia de perto, use uma câmera e, caso apareça a silhueta apenas na câmera e não na sala, é bem provável que seja um Goryo!.',
    ],
    strength: 'Só mostrará D.O.T.S pela câmera quando não tiver ninguém por perto.',
            weakness: 'Tende a vagar apenas perto de seu local.',
           
};

const hantu = {
    name: 'Hantu',
    evidence: ['TEMPERATURA', 'DIGITAIS', 'ORBS'],
    info: 'O Hantu é conhecido por aumentar sua velocidade em locais mais frios, deixar a caixa de força ligada irá enfraquece-lo.',
    traits: [
        `Durante uma caçada, caso a temperatura estiver abaixo de 10°C e/ou a caixa de força estiver desligada, ele irá aumentar sua velocidade imediatamente.`,
        'Diferente dos outros fantasmas, ele não fica mais rápido durante a caçada caso aviste o jogador.'
    ],
    strategies: [
        'Na dificuldade Pesadelo, o Hantu sempre deixará como evidência a TEMPERATURA, caso durante a investigação seja encontrado DIGITAIS e ORBS, o Hantu pode ser desconsiderado!',
        'O Hantu é um fantasma fácil de escapar, deixar as luzes ligadas irá ajudar muito a fugir dele, entretando ele ainda pode ser perigoso caso esteja em locais mais frios!',
        'Ele perde velocidade imediatamente caso saia de um local frio para um local mais quente.'
    ],
    strength: 'Se move mais rápido em temperaturas mais baixas.',
    weakness: 'Se move mais lento em temperaturas mais quentes.',
   
};

const jinn = {
    name: 'Jinn',
    evidence: ['EMF5', 'DIGITAIS', 'TEMPERATURA'],
    info: 'Um Jinn pode ser comparado com um Revenant por ser rápido quando estiver caçando o jogador.',
    traits: [
        'Quando o Jinn estiver caçando, caso ele aviste o jogador, irá correr com o dobro de sua velocidade até ficar 2 metros de distância, após isso ele mantem a velocidade padrão dos fantasmas.',
        'O Jinn possui outra habilidade que, quando usada, drena 25% de sanidade de todos os jogadores na partida. Não tem como saber quando isso acontece.',
        'Um Jinn não desliga a caixa de força, mas não pode ser confundido quando a caixa de força desarma após muitas luzes estiverem ligadas ao mesmo tempo.',
    ],
    strategies: [
        'As habilidades do Jinn só funcionam caso a caixa de força esteja ligada. Não importa se as luzes estiverem acesas ou apagadas.',
        'Deixar a caixa de força irá previnir as habilidades do Jinn, porém, deve ser levado em consideração a necessidade de fazer isso, pois o jogador irá perder sua sanidade mais rapidamente.',
        'O Jinn pode ser identificado durante a caçada, com a caixa de força ligada, caso o Jinn se aproxime muito rápido do jogador e depois diminua sua velocidade, provávelmente é um Jinn.'
    ],
    strength: 'Anda mais rápido se a vítima estiver longe.',
    weakness: 'Não desliga a caixa de força.',
    
};

const mare = {
    name: 'Mare',
    evidence: ['SPIRITBOX', 'ORBS', 'ESCRITA'],
    info: 'Um Mare detesta as luzes e será bem mais ativo no escuro.',
    traits: [
        'Caso o jogador ligue as luzes do local, o Mare tende à apagá-las quase que imediatamente.',
        'O Mare possui uma tendência muito alta à vagar em locais mais escuros e irá escolher apagar as luzes como interação.',
        'Ele pode começar uma caçada mais cedo caso as luzes do local estejam apagadas.',
        'Quando o Mare ativa um evento paranormal, ele possui altas chances de explodir as luzes do local para desativá-las e facilitar suas caçadas.'
    ],
    strategies: [
        'Um Mare pode ser facilmente identificado caso ele apague as luzes no momento em que o jogador as ligar.',
        'O Mare não liga as luzes, porém deve ser levado em consideração que os outros fantasmas apenas não queiram ligar nenhuma.',
        'O jogador que for buscar ORBS e SPIRITBOX devem tomar cuidado, pois ele possui maiores chances de ser caçado.',
        'Os equipamentos do jogador não podem ser considerados como fonte de luz para impedir o Mare.',
        'Caso as luzes estejam acesas, o Mare drenará menos sanidade e irá caçar com menos frequência.'
    ],
    strength: 'Tem chances maiores de atacar no escuro.',
    weakness: 'Não liga as luzes',
    
};

const myling = {
    name: 'Myling',
    evidence: ['EMF5', 'DIGITAIS', 'ESCRITA'],
    info: 'O Myling é um fantasma bem ativo e que tem o costume de emitir sons quando não está caçando.',
    traits: [
        'Quando o Myling não estiver caçando, ele irá emitir sons paranormais que podem ser ouvidos através do Microfone Direcional.',
        'Os passos do Myling durante uma caçada só podem ser ouvidos caso ele esteja próximo do jogador.'
    ],
    strategies: [
        'Os jogadores podem ouvir os sons paranormais através do Microfone Direcional, caso muitos sons sejam emitidos conforme o tempo passa, tudo indica um possível Myling.',
        'Durante a caçada, o Myling só irá emitir sons quando estiver próximo do jogador, para fazer um teste, deixe uma lanterna no chão próximo do local do fantasma e se afaste, de longe, caso você comece a ouvir os passos quase que imediatamente depois da lanterna começar a falhar, é um possível Myling.'
    ],
    strength: 'É mais quieto durante uma caçada.',
            weakness: 'Emite sons com mais frequência.',
            
};

const obake = {
    name: 'Obake',
    evidence: ['EMF5', 'DIGITAIS', 'ORBS'],
    info: 'O Obake é um fantasma conhecido por deixar evidências únicas na sala onde ele está.',
    traits: [
        'O Obake tende a deixar uma digital com 6 dedos, porém ainda sim, pode deixar uma digital com 5 dedos.',
        'Quando ele deixa uma ou mais digitais ao mesmo tempo, elas podem sumir quase que imediatamente.'
    ],
    strategies: [
        'Na dificuldade Pesadelo, o Obake sempre deixará como evidência as DIGITAIS, caso durante a investigação seja encontrado EMF5 e ORBS, o Obake pode ser desconsiderado!',
        'O Obake é o único que pode deixar uma digital com 6 dedos, porém nem sempre ele as deixa. Caso seja encontrada essa digital, certamente é um Obake!'
    ],
    strength: 'Digitais desaparecem mais rápido.',
    weakness: 'Tem chance de deixar digitais com 6 dedos.',
   
};

const oni = {
    name: 'Oni',
    evidence: ['EMF5', 'TEMPERATURA', 'DOTS'],
    info: 'O Oni é um fantasma mais ativo quando houver mais pessoas juntas em seu local, também é conhecido por jogar coisas com muita força.',
    traits: [
        'O Oni é mais ativo utilizando os objetos para causar eventos paranormais.',
        'Quando interagindo com objetos, ele tende a jogar as coisas em grandes velocidade, porém, diferente do Poltergeist, ele utiliza apenas um objeto por vez.'

    ],
    strategies: [
        'Por sem bem ativo, o Oni acaba entregando facilmente suas evidencias.',
        'Ele pode ser identificado caso o jogador veja algo sendo jogado rapidamente, apenas um item por vez para não ser confundido com um Poltergeis.',
        'O Oni não emite um evento paranormal do tipo "Fumaça", caso durante a caçada, o jogador presencie tal evento, o Oni pode ser desconsiderado!'
    ],
    strength: 'Mais ativo que os demais.',
    weakness: 'Por ser mais ativo, é mais fácil de identifica-lo.',
   
};

const onryo = {
    name: 'Onryo',
    evidence: ['SPIRITBOX', 'ORBS', 'TEMPERATURA'],
    info: 'O Onryo é conhecido por gostar muito do fogo e permanece quieto enquanto há alguma chama por perto dele.',
    traits: [
        'Quando uma chama se apaga tanto pelo jogador ou pelo fantasma, ele tem altas chances de iniciar uma caçada independente de sua sanidade!',
        'Caso não haja nenhum fogo por perto, a sanidade do jogador tende a cair mais rapidamente.',
        'O Onryo tem altas chances de apagar uma chama de propósito para iniciar uma caçada.'
    ],
    strategies: [
        'O fogo pode ser utilizado como um crucifixo contra o Onryo, se houver alguma chama acesa por perto do Onryo quando ele for iniciar uma caçada, ela irá ser interrompida e a chama irá se apagar. (Muito cuidado, pois quando a chama se apagar, imediatamente uma nova caçada pode ser ativada por esse motivo).',
        'Deixar muitas chamas acesas perto dele pode ser bom e ruim ao mesmo tempo, por ter chamas, ele certamente não irá te caçar, porém, caso uma chama se apague perto dele, as outras podem se apagar também, o que irá gerar uma reação em cadeia enorme e você será caçado imediatamente!',
        'Caso o Onryo seja um provável fantasma em sua investigação, não brinque com o fogo e tome cuidado com chamas perto dele!'
    ],
    strength: 'Apagar uma vela pode causar uma caçada imediata.',
    weakness: 'Deixar uma vela acesa reduz as chances de uma caçada.',
    
};

const phantom = {
    name: 'Phantom',
    evidence: ['EMF5', 'DIGITAIS', 'DOTS'],
    info: 'O Phantom é um fantasma que desaparece ao ter uma foto tirada durante sua manifestação, porém isso não o afeta durante uma caçada!',
    traits: [
        'Quando um Phantom usa sua habilidade, ele teleporta para perto da localização de um jogador aleatório, causando EMF5 em seu local.',
        'Se tirar uma foto do Phantom ele irá desaperecer imediatamente por algum tempo.',
        'Caso o jogador olhe para o Phantom próximo dele, irá ter sua sanidade drenada por cada segundo olhando.',
        'O Phantom não irá possuir o jogador caso use o Ouija ou ao ser invocado.'
    ],
    strategies: [
        'Ao tirar uma foto do Phantom, ele irá desaperecer imediatamente, caso isso aconteça, certamente é um Phantom.',
        'Quando estiver fugindo do Phantom, evite olhar em direção à ele para não perder muita sanidade!'
    ],
    strength: 'Olhar para ele, drenará mais sanidade.',
            weakness: 'Se tirar uma foto dele ele some.',
            
};

const poltergeist = {
    name: 'Poltergeist',
    evidence: ['EMF5', 'ESCRITA', 'DIGITAIS'],
    info: 'O Poltergeist é o fantasma que possui a habilidade de jogar muitos objetos ao mesmo tempo e drenar sanidade dos jogadores durante este evento.',
    traits: [
        'Quando o Poltergeist interage com o Ambiente, ele tende a jogar muitos objetos ao mesmo. Caso haja algum jogador perto do local da interação, perderá sanidade em uma porcentagem igual ao número de itens com os quais o Poltergeist interagiu.',
        'Caso não possua nenhum objeto no local, o Poltergeist fica impossibilitado de utilizar sua habilidade.'

    ],
    strategies: [
        'A habilidade do Poltergeist de jogar vários objetos de uma vez, torna fácil de identificá-lo. Os jogadores podem reunir vários objetos, deixar na sala dele e esperar uma interação, caso ele jogue muitos itens ao redor do local, certamente é um Poltergeist.',
        'Diferente dos outros fantasmas, o Poltergeist irá drenar a sanidade dos jogadores caso interaja com os objetos em seu local, caso esteja em uma dificuldade abaixo do Pesadelo e notar uma queda de sanidade após essa interação, possa ser um provável Poltergeist.'
    ],
    strength: 'Joga muita coisa à sua volta.',
    weakness: 'Inativo se não houver objetos por perto.',
   
};

const raiju = {
    name: 'Raiju',
    evidence: ['EMF5', 'ORBS', 'DOTS'],
    info: 'O Raiju utiliza os objetos eletrônicos para aumentar sua fúria e sua velocidade durante uma caçada.',
    traits: [
        'Quando o Raiju aparece durante um evento paranormal ou uma caçada, a área com a qual ele interfere com os objetos eletrônicos é bem maior que a dos demais fantasmas.',
        'Caso haja objetos eletrônicos ligados próximos ao local do Raiju, as caçadas podem iniciar mais cedo. Estes objetos servem como "trilha" para o Raiju, quando próximos à ele durante uma caçada, irá duplicar sua velocidade por um breve período.',
        'Câmeras de cabeça, Sensores de movimento e sensores de sons não contam como objetos eletrônicos para ativar a habilidade do Raiju.'
    ],
    strategies: [
        'Evite deixar objetos na sala do fantasma caso seja um Raiju, isso fará com que ele se torne extremamente perigoso.',
        'Durante uma caçada, evite ficar com equipamentos ligados próximos ao Raiju, desligue tudo e se possível, tenha uma vela ou um esqueiro em mãos.',
        'Caso você consiga vê-lo aumentar sua velocidade quando passar próximo de objetos eletrônicos sem ser visto, então é um provável Raiju.'
    ],
    strength: 'Fica mais rápido perto de equipamentos eletrônicos.',
    weakness: 'Buga equipamentos eletrônicos de longe quando caça.',
   
};

const revenant = {
    name: 'Revenant',
    evidence: ['ORBS', 'ESCRITA', 'TEMPERATURA'],
    info: 'O Revenant é marcado por ser um dos fantasmas mais rápidos durante uma caçada.',
    traits: [
        'O Revenant não tem sua velocidade aumentada conforme a investigação dura.',
        'Apesar de ser extremamente rápido quando estiver caçando, mantêm sua velocidade normal caso não veja o jogador.'

    ],
    strategies: [
        'Quando um Revenant entrar em modo de caçada, esconda-se o mais rápido possível pois é impossível fugir dele enquanto estiver em seu campo de visão.',
        'Durante a caçada, o Revenant emite sons de passos acelerados caso esteja vendo o jogador, porém, se não avistar nenhum jogador, poderá ouvir seus passos extremamente lentos.'
    ],
    strength: 'Persegue o jogador mais rápido se o ver.',
    weakness: 'Se move lentamente quando não estiver atrás do jogador.',
   
};

const shade = {
    name: 'Shade',
    evidence: ['EMF5', 'ESCRITA', 'TEMPERATURA'],
    info: 'O Shade é conhecido por ser um fantasma tímido, dificultando a investigação e não irá executar interações caso haja muitas pessoas em seu local.',
    traits: [
        'O Shade tende a iniciar suas caçadas bem tarde, próximo dos 35% de sanidade (Exceto em caçadas amaldiçoadas).',
        'Durante um evento paranormal, o Shade costuma "assoviar" no ouvido do jogador ao invés de se manisfestar.',
        'Caso haja ao menos 1 jogador dentro de seu local, o Shade tem baixas chances de iniciar uma caçada, entretanto, isso não previne uma caçada, principalmente se ele estiver vagando fora de seu local.'

    ],
    strategies: [
        'Por ser um fantasma tímido, será bem difícil identificá-lo. Sabendo disso, os jogadores devem aumentar suas interações e provocar o fantasma chamando pelo seu nome, utilizando objetos amaldiçoados ou utilizando incenso em seu local.',
        'Em tentativa de enganar o fantasma e tentar provocar uma caçada, tenha certeza de que não há jogadores próximos ao local do fantasma.'
    ],
    strength: 'Interage pouco por ser tímido, tornando-o difícil de identificar.',
    weakness: 'Difícilmente irá caçar se tiver muitas pessoas perto.',
    
};

const spirit = {
    name: 'Spirit',
    evidence: ['EMF5', 'SPIRITBOX', 'ESCRITA'],
    info: 'O Spirit é um fantasma sem nenhuma peculiaridade, possui uma forte reação ao incenso e pode ser facilmente confundido com qualquer outro fantasma com evidências similares.',
    traits: [
        'O Spirit não possui nenhuma habilidade única, o que pode facilitar a investigação.'

    ],
    strategies: [
        'Utilizar um incenso em seu local, fará com que ele não entre em modo caçada por um longo tempo.'
    ],
    strength: 'Nenhuma.',
    weakness: 'Incenso evita caçada por um longo período.',
   
};

const the_mimic = {
    name: 'The Mimic',
    evidence: ['SPIRITBOX', 'DIGITAIS', 'TEMPERATURA', 'ORBS'],
    info: 'O Mímico é um fantasma que possui a habilidade de copiar as habilidades de outros fantasmas.',
    traits: [
        'O Mímico é capaz de copiar qualquer habilidade de qualquer fantasma existente por alguns minutos, trocando para outro logo em seguida.',
        'Ele sempre deixará como evidência os ORBS. Na dificuldade Pesadelo, ele irá deixar 3 evidências ao invés de 2.',
        'Mesmo podendo copiar as habilidades de outros fantasmas, ele apenas utiliza 1 fantasma por vez.'
    ],
    strategies: [
        'Por ter a capacidade de copiar as habilidades de outros fantasmas, o torna extremamente perigoso. Para lidar com ele, considere sempre que ele possua todas as habilidades ao mesmo tempo e se prepare para as mais perigosas como: caçadas mais cedo (Demônio), manter as luzes acesas (Mare), ficar atento aos dispositivos eletrônicos (Raiju), tomar cuidado com o fogo (Onryo), evitar falar no local do fantasma (Yokai).',
        'Ande preferencialmente com um incenso na mão em caso de caçada para se preparar contra um possível Mímico com habilidades de um Revenan.',
        'O Mímico pode também copiar as habilidades únicas de outros fantasmas como por exemplo, deixar uma digital com 6 dedos (Obake).',
        'Na dificuldade Pesadelo, o Mímico deixa 3 evidências.',
        'Após ser notado diferentes comportamentos contra o Mímico como encontrar uma digital com 6 dedos e sumir ao ter sua foto tirada (Phantom), certamente é um Mímico.'
    ],
    strength: 'Irá COPIAR A HABILIDADE de algum fantasma com as mesmas evidências.',
            weakness: 'Sempre deixa orb fantasma como 4º evidência.',
           
};

const the_twins = {
    name: 'The Twins',
    evidence: ['EMF5', 'SPIRITBOX', 'TEMPERATURA'],
    info: 'Os Gêmeos são conhecidos por serem um par, ambos podem interagir com o ambiente ou iniciar uma caçada independente. Mesmo sendo um par, Os Gêmeos não ficam no mesmo local, causando interações em vários locais ao mesmo tempo, dificultando a investigação.',
    traits: [
        'Quando não estão caçando, eles podem se mover e interagir com o ambiente quase que ao mesmo tempo ou sozinhos.',
        'Dentre Os Gêmeos, temos o "Gêmeo mais velo", ele geralmente se matêm no local enquanto o "Gêmeo mais novo" se move pelos locais.',
        'O Gêmeo mais velho pode deixar todas as evidências (EMF5, SPIRITBOX, TEMPERATURA), enquando o outro apenas deixa EMF5 em suas interações.',
        'O Gêmeo mais novo não pode ser detectado por sensores de movimento.',
        'Independete do Gêmeo, eles podem iniciar uma caçada, sendo que o Gêmeo mais novo é mais rápido que o Gêmeo mais velho.',
        'Mesmo os dois podendo caçar, eles não caçam ao mesmo tempo. O último Gêmeo que interagir com o local tende a ser o que irá caçar.',


    ],
    strategies: [
        'Durante as caçadas, caso note uma diferença significante entre cada uma delas, o fantasma pode ser Os Gêmeos.',
        'Os Gêmeos irão tentar confundir os jogadores por sua habilidaded e agirem em locais separados, porém, isso pode ser usado contra eles. Caso encontre EMF5 em alguma interação longe do local onde encontrou SPIRITBOX ou TEMPERATURA, é possível que sejam Os Gêmeos.',
        'O crucifixo apenas irá interromper as caçadas de ambos se estiver no local do Gêmeo mais velho, mesmo se a caçada ser iniciar pelo mais novo, ainda irá funcionar. Crucifixos no local do Gêmeo mais novo não impede as caçadas de nenhum deles.'
    ],
    strength: 'Qualquer um dos gêmeos pode começar uma caçada, mas não ao mesmo tempo.',
    weakness: 'Irão frequentemente interagir com o ambiente ao mesmo tempo.',
    
};


const wraith = {
    name: 'Wraith',
    evidence: ['EMF5', 'SPIRITBOX', 'DOTS'],
    info: 'O Wraith é o fantasma mais perigoso, possui habilidades de atravessar paredes, voar e teleportar aleatoriamente para perto dos jogadores. Também é conhecido por não deixar pegadas ao pisar no sal.',
    traits: [
        'Quando se teleportar, ele irá aparecer próximo de algum jogador aleatório e irá causar uma leitura de EMF de níveis entre 2-5.',
        'A habilidade do Wraith de se teleportar não funciona durante uma caçada, porém, ele pode se teleportar antes de iniciar uma caçada.',
        'Caso o Wraith pise no sal, ele irá aumentar suas atividades por um tempo e não deixará rastros de pegadas.',
        'O Wraith não pode ver através de paredes ou portas, evitar pisar no sal ou ser identificado por sua habilidade de voar.'
    ],
    strategies: [
        'Caso o jogador esteja vagando e note leitura de EMF de níveis entre 2-5, possa ser uma indicação de que um Wraith teleportou-se para perto.',
        'Uma das formas mais fáceis de identificar um Wraith é através de seus rastros sobre o sal. Após ele pisar no sal e não ser encontradas evidências de pegadas, tudo indica que é um Wraith.',
        'Ao mesmo tempo, se for encontradas pegadas, um Wraith pode ser desconsiderado.',
        'Por não deixar pegadas ou digitais, a forma de ganhar mais dinheiro contra esse fantasma seria colocando objetos em seu local e esperar interações para poder fotografá-las.'
    ],
    strength: 'Sal aumenta a atividade',
    weakness: 'Não deixa pegadas ao pisar no sal.',
    
};


const yokai = {
    name: 'Yokai',
    evidence: ['SPIRITBOX', 'ORBS', 'DOTS'],
    info: 'O Yokai é sensível as vozes dos jogadores, falar perto de seu local irá enfurecê-lo, podendo provocar uma caçada.',
    traits: [
        'A habilidade do Yokai de ficar enfurecido com as vozes dos jogadores podem causar caçadas muito cedo, porém durante as caçadas, ele apenas ouve jogadores e eletrônicos que estiverem muito próximos à ele.',
        'Falar perto dele irá aumentar muito suas atividades.'

    ],
    strategies: [
        'Não falar no início da caçada até descobrir evidências de que não seja um Yokai, possa ser a melhor estratégia. Fazendo isto os jogadores podem evitar caçadas mais cedo, mas ainda sim, devem tomar cuidado pois o Demônio também pode caçar mais cedo.',
        'Entretanto, se precisar de interações ou de manifestações, coloque crucifixos em volta do local e apenas comece a conversar normalmente, isso irá ser o bastante para fazer com que o Yokai se enfureça.',
        'Sua fraqueza se baseia em não ouvir jogadores que estiverem longe durante uma caçada, o mais simples será correr e se esconder, isso já deve ser seguro o bastante para evitar morrer.'
    ],
    strength: 'Ao falar perto dele, irá enfurecê-lo, aumentando as chances de uma caçada.',
    weakness: 'Só pode ouvir vozes próximas a ele durante uma caçada.',
   
};


const yurei = {
    name: 'Yurei',
    evidence: ['ORBS', 'TEMPERATURA', 'DOTS'],
    info: 'O Yurei é conhecido por afetar a sanidade dos jogadores com mais facilidade.',
    traits: [
        'Qualquer interação ou evento paranormal causada por um Yurei, irá drenar um pouco a sanidade dos jogadores próximos. Semelhante ao Phantom, ele também drena sanidade ao olhar para ele.',
        'O Yurei possui uma habilidade de drenar uma quantidade considerável de sanidade dos jogadores próximos, ao fazer isso, a porta do local irá se fechar completamente, este evento é conhecido como "evento paranormal silencioso". O fantasma não se manifesta durante este evento.',
    ],
    strategies: [
        'Utilizar um incenso irá prendê-lo em sua posição atual por algum tempo.',
        'Ao se manisfestar, se afaste o mais rápido possível (após tirar uma foto) para evitar perca de sanidade.',
        'Sua habilidade de drenar sanidade é complicada de controlar, use suas pílulas de sanidade com cuidado!',
    ],
    strength: 'Drena muito a sanidade.',
    weakness: 'Usar incenso na sala dele irá diminuir a frequência com a qual ele sai de lá.',
    
};
/* OBJETOS AMALDIÇOADOS */

const cards = {
    name: 'Cartas Tarô',
    uses: 10,
    info: 'As cartas de tarô se referem à um deck com 10 cartas aleatórias, podendo conter cartas repetidas. Cada uma possui um efeito diferente, podendo ser retiradas apenas dentro do local à ser investigado. JAMAIS utilize as cartas durante uma caçada, pois ela terá o seu efeito anulado e irá sumir do deck. Tire uma foto das cartas antes de utiliza-las, pois o deck irá sumir após todas as 10 terem sido retiradas.',
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
};

const ouija = {
    name: 'Tabuleiro Ouija',
    uses: 'Reutilizável',
    info_sanity: 'Abaixo você poderá ver quais os tipos de perguntas que podem ser feitas e o seu custo de sanidade.',
    effect_sanity: [
        {
            info: 'Localização do fantasma',
            success: '40%',
            suc_demon: '32%'
        },
        {
            info: 'Esconde-esconde',
            success: '25%',
            suc_demon: '20%'
        },
        {
            info: 'Pessoas na sala ou localização do osso',
            success: '20%',
            suc_demon: '16%'
        },
        {
            info: 'Outros',
            success: '5%',
            suc_demon: '4%'
        }
    ],
    info: 'O Tabuleiro Ouija é um objeto amaldiçoado utilizado para se comunicar com o fantasma. Nele podem ser feitas perguntas que podem (ou não) lhe ajudar durante a investigação. Para cada pergunta feita, uma porcentagem de sua sanidade irá ser trocada pela resposta do fantasma. Caso a sanidade do jogador que fará as perguntas cheguem a 0%, o Tabuleiro irá ser destruído e uma caçada amaldiçoada se iniciará!',
    effects: [
        {
            name: 'Sobre sua atual localização.',
        },
        {
            name: 'Sobre sua idade.'
        },
        {
            name: 'Sobre sua morte'
        },
        {
            name: 'Número de pessoas na sala.'
        },
        {
            name: 'Sobre atual sanidade do jogador.'
        },
        {
            name: 'Sobre a forma de sua morte.'
        },
        {
            name: 'Sobre a localização do osso.'
        },
        {
            name: 'Perguntas com "Sim" ou "Não".'
        },
        {
            name: 'Brincar de esconde-esconde.'
        },
        {
            name: 'Sobre o seu propósito.'
        },
        {
            name: 'Algumas piadas como "Toc Toc".'
        },
        {
            name: 'Descobrir se é um fantasma tímido.'
        }
    ]
};

const music_box = {
    name: 'Caixa de Música',
    uses: 1,
    info: 'A Caixa de Música, quando tocada, irá emitir uma melodia que fará com que o fantasma cante junto e revele sua localização, entretanto ele permanecerá invisível. Quando próximo ao fantasma, irá fazer com que ele se manifeste e vá em direção da Caixa de Música, caso o fantasma consiga encostar ou andar por pelo menos 5 segundos após se manifestar, uma caçada amaldiçoadas se iniciará. Ao tocar, a Caixa de Música não pode e nem deve ser interrompida, caso o jogador deixer a caixa cair no chão se estiver segurando, irá parar a melodia e uma caçada amaldiçoada irá se iniciar. A Caixa de Música pode ser colocada no chão e ser tocada.',
    effect: 'Ao tocar a Caixa de Música, todos os jogadores próximos à melodia irão perder sanidade constantemente até que a música acabe. Tocar a Caixa de Música no chão, distante da sala do fantasma e se afastar, talvez seja a melhor opção para usar este objeto.'

};


export const Data = (par) => {

    switch (par) {
        case 'banshee':
            return banshee;
        case 'demonio':
            return demonio;
        case 'goryo':
            return goryo;
        case 'hantu':
            return hantu;
        case 'jinn':
            return jinn;
        case 'mare':
            return mare;
        case 'myling':
            return myling;
        case 'obake':
            return obake;
        case 'oni':
            return oni;
        case 'onryo':
            return onryo;
        case 'phantom':
            return phantom;
        case 'poltergeist':
            return poltergeist;
        case 'raiju':
            return raiju;
        case 'revenant':
            return revenant;
        case shade:
            return shade;
        case 'spirit':
            return spirit;
        case 'the_mimic':
            return the_mimic;
        case 'the_twins':
            return the_twins;
        case 'wraith':
            return wraith;
        case 'yokai':
            return yokai;
        case 'yurei':
            return yurei;

        /* OBJECTS */
        case 'cards':
            return cards;
        case 'ouija':
            return ouija;
        case 'music_box':
            return music_box;
        default:
            return null;
    }


};