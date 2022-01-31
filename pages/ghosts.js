import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


import { useState, useEffect } from 'react';
import GhostComponent from './ghostSingleComponent';
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';



const Ghosts = (props) => {
    const [foundEvidences, setFoundEvidences] = useState([]);
    const [possibleGhosts, setPossibleGhosts] = useState([]);
    const [evidences, setEvidences] = useState([
        {
            name: 'DOTS',
            isActive: 0,
            icon: "photo-camera-front",
            type: MaterialIcons
        },
        {
            name: 'EMF',
            isActive: 0,
            icon: "radio-handheld",
            type: MaterialCommunityIcons
        },
        {
            name: 'TEMPERATURA',
            isActive: 0,
            icon: "snowflake-2",
            type: Fontisto
        },
        {
            name: 'DIGITAIS',
            isActive: 0,
            icon: "hand-right",
            type: Ionicons
        },
        {
            name: 'ESCRITA',
            isActive: 0,
            icon: "book",
            type: Octicons
        },
        {
            name: 'ORBS',
            isActive: 0,
            icon: "orbit",
            type: MaterialCommunityIcons
        },
        {
            name: 'SPIRITBOX',
            isActive: 0,
            icon: "radio",
            type: MaterialCommunityIcons
        },
    ]);
    const [ghosts, setGhosts] = useState([
        {
            name: 'Banshee',
            evidence: ['ORBS', 'DIGITAIS', 'DOTS'],
            strength: 'Caçará um jogador por vez.',
            weakness: 'Crucifixo aumentado para 5m.',
            isActive: true
        },
        {
            name: 'Demônio',
            evidence: ['TEMPERATURA', 'DIGITAIS', 'ESCRITA'],
            strength: 'Iniciará caçadas com mais frequência.',
            weakness: 'Perderá menos sanidade usando objetos amaldiçoados.',
            isActive: true
        },
        {
            name: 'Goryo',
            evidence: ['EMF', 'DIGITAIS', 'DOTS'],
            strength: 'Só mostrará D.O.T.S pela câmera quando não tiver ninguém por perto.',
            weakness: 'Tende a vagar apenas perto de seu local.',
            isActive: true
        },
        {
            name: 'Hantu',
            evidence: ['ORBS', 'TEMPERATURA', 'DIGITAIS'],
            strength: 'Se move mais rápido em temperaturas mais baixas.',
            weakness: 'Se move mais lento em temperaturas mais quentes.',
            isActive: true
        },
        {
            name: 'Jinn',
            evidence: ['EMF', 'TEMPERATURA', 'DIGITAIS'],
            strength: 'Anda mais rápido se a vítima estiver longe.',
            weakness: 'Não desliga a caixa de força.',
            isActive: true
        },
        {
            name: 'Mare',
            evidence: ['ORBS', 'SPIRITBOX', 'ESCRITA'],
            strength: 'Tem chances maiores de atacar no escuro.',
            weakness: 'Não liga as luzes',
            isActive: true
        },
        {
            name: 'Myling',
            evidence: ['EMF', 'DIGITAIS', 'ESCRITA'],
            strength: 'É mais quieto durante uma caçada.',
            weakness: 'Emite sons com mais frequência.',
            isActive: true
        },
        {
            name: 'Obake',
            evidence: ['EMF', 'ORBS', 'DIGITAIS'],
            strength: 'Digitais desaparecem mais rápido.',
            weakness: 'Tem chance de deixar digitais com 6 dedos.',
            isActive: true
        },
        {
            name: 'Oni',
            evidence: ['EMF', 'TEMPERATURA', 'DOTS'],
            strength: 'Mais ativo que os demais.',
            weakness: 'Por ser mais ativo, é mais fácil de identifica-lo.',
            isActive: true
        },
        {
            name: 'Onryo',
            evidence: ['ORBS', 'SPIRITBOX', 'TEMPERATURA'],
            strength: 'Apagar uma vela pode causar uma caçada imediata.',
            weakness: 'Deixar uma vela acesa reduz as chances de uma caçada.',
            isActive: true
        },
        {
            name: 'Phantom',
            evidence: ['SPIRITBOX', 'DIGITAIS', 'DOTS'],
            strength: 'Olhar para ele, drenará mais sanidade.',
            weakness: 'Se tirar uma foto dele ele some.',
            isActive: true
        },
        {
            name: 'Poltergeist',
            evidence: ['SPIRITBOX', 'DIGITAIS', 'ESCRITA'],
            strength: 'Joga muita coisa à sua volta.',
            weakness: 'Inativo se não houver objetos por perto.',
            isActive: true
        },
        {
            name: 'Raiju',
            evidence: ['EMF', 'ORBS', 'DOTS'],
            strength: 'Fica mais rápido perto de equipamentos eletrônicos.',
            weakness: 'Buga equipamentos eletrônicos de longe quando caça.',
            isActive: true
        },
        {
            name: 'Revenant',
            evidence: ['ORBS', 'TEMPERATURA', 'ESCRITA'],
            strength: 'Persegue o jogador mais rápido se o ver.',
            weakness: 'Se move lentamente quando não estiver atrás do jogador.',
            isActive: true
        },
        {
            name: 'Shade',
            evidence: ['EMF', 'TEMPERATURA', 'ESCRITA'],
            strength: 'Interage pouco por ser tímido, tornando-o difícil de identificar.',
            weakness: 'Difícilmente irá caçar se tiver muitas pessoas perto.',
            isActive: true
        },
        {
            name: 'Spirit',
            evidence: ['EMF', 'SPIRITBOX', 'ESCRITA'],
            strength: 'Nenhuma.',
            weakness: 'Incenso evita caçada por um longo período.',
            isActive: true
        },
        {
            name: 'The Mimic',
            evidence: ['SPIRITBOX', 'TEMPERATURA', 'DIGITAIS', 'ORBS'],
            strength: 'Irá COPIAR A HABILIDADE de algum fantasma com as mesmas evidências.',
            weakness: 'Sempre deixa orb fantasma como 4º evidência.',
            isActive: true
        },
        {
            name: 'The Twins',
            evidence: ['EMF', 'SPIRITBOX', 'TEMPERATURA'],
            strength: 'Qualquer um dos gêmeos pode começar uma caçada, mas não ao mesmo tempo.',
            weakness: 'Irão frequentemente interagir com o ambiente ao mesmo tempo.',
            isActive: true
        },
        {
            name: 'Wraith',
            evidence: ['EMF', 'SPIRITBOX', 'DOTS'],
            strength: 'Sal aumenta a atividade',
            weakness: 'Não deixa pegadas ao pisar no sal.',
            isActive: true
        },
        {
            name: 'Yokai',
            evidence: ['ORBS', 'SPIRITBOX', 'DOTS'],
            strength: 'Ao falar perto dele, irá enfurecê-lo, aumentando as chances de uma caçada.',
            weakness: 'Só pode ouvir vozes próximas a ele durante uma caçada.',
            isActive: true
        },
        {
            name: 'Yurei',
            evidence: ['ORBS', 'TEMPERATURA', 'DOTS'],
            strength: 'Drena muito a sanidade.',
            weakness: 'Usar incenso na sala dele irá diminuir a frequência com a qual ele sai de lá.',
            isActive: true
        }
    ]);

    const _setData = async () => {
        try {
            let ghostJson = (possibleGhosts.length > 0 || foundEvidences.length > 0) ? possibleGhosts : ghosts;
            let obj = {
                evidence: foundEvidences,
                ghosts: ghostJson
            };
            obj = JSON.stringify(obj);
            await AsyncStorage.setItem('infos', obj);
        } catch (e) {
            // saving error
        }
    };

    const _getData = async () => {
        try {
            let dataJson = await AsyncStorage.getItem('infos');
            if (dataJson !== null) {
                dataJson = JSON.parse(dataJson);

                dataJson.evidence = dataJson.evidence.filter(val => !foundEvidences.includes(val))
                return dataJson;
            } else {
                return null;
            }
        } catch (e) {

        }
    };

    const handleFoundEvidence = (par) => {
        par.isActive++;
        if (par.isActive > 2) {
            par.isActive = 0;
        }

        if (par.isActive === 1) {
            setFoundEvidences([...foundEvidences, par]);
        }
        else if (par.isActive === 2) {

            let new_arr = foundEvidences?.map(val => {
                if (par.name === val.name) {
                    val.isActive = 2;
                }

                return val;
            })
            setFoundEvidences(new_arr);
        }
        else {
            let new_arr = foundEvidences.filter(i => i.name !== par.name);
            setFoundEvidences(new_arr);
            setPossibleGhosts([]);
        }

    };

    const handleGhostToggle = (par, who) => {

        if (who === 'possible') {
            let new_arr = possibleGhosts?.map((val) => {
                if (par === val) {
                    val.isActive = !val.isActive;
                }
                return val;
            })
            setPossibleGhosts(new_arr);
        } else {
            let new_arr = ghosts?.map((val) => {
                if (par === val) {
                    val.isActive = !val.isActive;
                }
                return val;
            })
            setGhosts(new_arr);
        }
    };


    useEffect(async () => {
        let data = await _getData();

        if (data.evidence.length > 0) {
            let items = [];
            let items2 = data.evidence;
            items = evidences?.map((val) => {
                for (let i = 0; i < items2.length; i++) {
                    if (val.name === items2[i].name) {
                        val.isActive = items2[i].isActive;
                        items2[i].type = val.type;
                    }
                }
                return val;
            })

            setFoundEvidences(items2);
            setEvidences(items);
            setPossibleGhosts(data.ghosts);

        } else {
            setGhosts(data.ghosts);
        }
    }, []);

    useEffect(async () => {
        await _setData();
    }, [foundEvidences, ghosts, possibleGhosts]);


    useEffect(() => {
        if (foundEvidences.length > 0) {
            let new_arr = ghosts;
            new_arr = new_arr.filter(i => foundEvidences.every(item => {
                if (item.isActive !== 2) {
                    return i.evidence.includes(item.name);
                } else {
                    return !i.evidence.includes(item.name);
                }
            }));
            setPossibleGhosts(new_arr);

        }
    }, [foundEvidences]);

    const handleReset = () => {


        Alert.alert(
            "Resetar",
            "Deseja resetar as evidências ?",
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                },
                {
                    text: "Resetar", onPress: () => {
                        setPossibleGhosts([]);
                        setFoundEvidences([]);
                        let new_arr = ghosts.map(item => {
                            item.isActive = true;
                            return item;
                        })
                        let new_arr2 = evidences.map(item => {
                            item.isActive = 0;
                            return item;
                        })
                        setEvidences(new_arr2);
                        setGhosts(new_arr);
                        (async()=>{
                           await AsyncStorage.multiRemove(['infos','darkmode'])
                        })();
                    }
                }
            ]
        );
    };

    return (
        <ScrollView style={style.app}>

            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                    <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Evidências</Text>
                    <TouchableOpacity onPress={() => handleReset()}>
                        <Ionicons
                            name='trash'
                            style={style.red}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[style.titleTip, (props.darkMode) ? style.colorDark : style.colorLight]}>Toque na evidência para filtrar os possíveis fantasmas</Text>
                <View style={style.evidencesWrapper}>
                    {
                        evidences?.map((val, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => handleFoundEvidence(val)}
                                    style={[(props.darkMode) ? style.appDark : style.evidenceLight, style.evidenceSingle,
                                    val.isActive === 1 ?
                                        { backgroundColor: '#11dd88' } :
                                        val.isActive === 2 ?
                                            { backgroundColor: '#e73535' } :
                                            {}
                                    ]
                                    }
                                    key={index}>
                                    <val.type
                                        name={val.icon}
                                        style={val.isActive !== 0 ? style.iconIdleDark : (props.darkMode) ? style.iconDark
                                            : style.iconIdleLight}
                                        size={45}
                                    />
                                    <Text
                                        style={
                                            [style.evidenceSingeText,
                                            (val.isActive) === 0 ?
                                                (props.darkMode) ? style.titleDark
                                                    : style.colorLight
                                                : style.titleDark
                                            ]
                                        }>{val.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Fantasmas</Text>
                <Text style={[style.titleTip, (props.darkMode) ? style.colorDark : style.colorLight]}>Toque no fantasma para ver dicas contra ele</Text>
                <Text style={[style.titleTip, (props.darkMode) ? style.colorDark : style.colorLight]}>Toque e segure no fantasma para desconsiderá-lo</Text>
                {
                    foundEvidences.length <= 0 ?
                        ghosts?.map((val, index) => {
                            return (
                                <TouchableOpacity key={index}
                                    style={[style.ghostSingle,
                                    !val.isActive ?
                                        { backgroundColor: '#e73535' }
                                        :
                                        (props.darkMode) ? style.optionDark : style.optionLight
                                    ]
                                    }
                                    onLongPress={() => handleGhostToggle(val, 'ghosts')}
                                    onPress={() => props.changePage({ title: val.name, tag: 'ghost', type: val.name.toLowerCase() })}
                                >
                                    <GhostComponent darkMode={props.darkMode} ghost={val} />
                                </TouchableOpacity>
                            )
                        })
                        :
                        possibleGhosts.length > 0 ?
                            possibleGhosts?.map((val, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={[style.ghostSingle,
                                        !val.isActive ?
                                            { backgroundColor: '#e73535' }
                                            :
                                            (props.darkMode) ? style.optionDark : style.optionLight
                                        ]
                                        }
                                        onLongPress={() => handleGhostToggle(val, 'possible')}
                                        onPress={() => props.changePage({ title: val.name, tag: 'ghost', type: val.name.toLowerCase() })}
                                    >
                                        <GhostComponent darkMode={props.darkMode} ghost={val} />
                                    </TouchableOpacity>
                                )
                            })
                            :
                            <View style={[style.options, (props.darkMode) ? style.optionDark : style.optionLight]}>
                                <Text style={[{ textAlign: 'center' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Nenhum fantasma correspondente!</Text>
                            </View>
                }
            </View>
        </ScrollView >
    )
};



export default Ghosts;