import { Data } from './data';
import { View, Text, ScrollView } from 'react-native';
import style from '../style/style';


const Objects = (props) => {

    const objs = Data(props.objectType);

    return (
        <ScrollView>
            <View>
                {
                    objs ?
                        <View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>{objs.name}</Text>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.info}</Text>
                                </View>
                            </View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <View style={style.cardsWrapper}>
                                    <View style={style.cardSingle}>
                                        <Text style={[style.blue, { textAlign: 'center' }]}>Quantidade de usos</Text>
                                    </View>
                                    <View style={style.cardSingle}>
                                        <Text style={[style.red, { textAlign: 'center' }]}>{objs.uses}</Text>
                                    </View>
                                </View>
                            </View>

                            { // OUIJA --------------------------------------------------------------------------------------------
                                props.objectType === 'ouija' ?
                                    <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                        <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Troca de sanidade</Text>
                                        <View style={{ paddingTop: 5 }}>
                                            <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.info_sanity}</Text>
                                        </View>
                                        <View style={style.cardsWrapper}>
                                            <View style={{ width: '50%' }}>
                                                <Text style={[style.blue, { textAlign: 'justify' }]}>Tipos de perguntas</Text>
                                            </View>
                                            <View style={style.ouijaSingle}>
                                                <Text style={[style.red, { textAlign: 'center' }]}>Sucedidas</Text>
                                            </View>
                                            <View style={style.ouijaSingle}>
                                                <Text style={[style.red, { textAlign: 'center' }]}>Sucedidas (Demonio)</Text>
                                            </View>
                                        </View>
                                        {
                                            objs.effect_sanity?.map((val, index) => {
                                                return (
                                                    <View key={index} style={style.cardsWrapper}>
                                                        <View style={{ width: '50%' }}>
                                                            <Text style={[style.blue, { textAlign: 'justify' }]}>{val.info}</Text>
                                                        </View>
                                                        <View style={style.ouijaSingle}>
                                                            <Text style={[style.red, { textAlign: 'center' }]}>{val.success}</Text>
                                                        </View>
                                                        <View style={style.ouijaSingle}>
                                                            <Text style={[style.red, { textAlign: 'center' }]}>{val.suc_demon}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                    // FIM OUIJA ----------------------------------------------------------------------------------------
                                    :
                                    props.objectType === 'doll' ?
                                        <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                            <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Troca de sanidade</Text>
                                            <View style={{ paddingTop: 5 }}>
                                                <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.info_sanity}</Text>
                                            </View>
                                            <View style={style.cardsWrapper}>
                                                <View style={{ width: '50%' }}>
                                                    <Text style={[style.blue, { textAlign: 'justify' }]}>Locais</Text>
                                                </View>
                                                <View style={style.ouijaSingle}>
                                                    <Text style={[style.red, { textAlign: 'center' }]}>Sucedidas</Text>
                                                </View>
                                                <View style={style.ouijaSingle}>
                                                    <Text style={[style.red, { textAlign: 'center' }]}>Sucedidas (Demonio)</Text>
                                                </View>
                                            </View>
                                            {
                                                objs.effect_sanity?.map((val, index) => {
                                                    return (
                                                        <View key={index} style={style.cardsWrapper}>
                                                            <View style={{ width: '50%' }}>
                                                                <Text style={[style.blue, { textAlign: 'justify' }]}>{val.info}</Text>
                                                            </View>
                                                            <View style={style.ouijaSingle}>
                                                                <Text style={[style.red, { textAlign: 'center' }]}>{val.success}</Text>
                                                            </View>
                                                            <View style={style.ouijaSingle}>
                                                                <Text style={[style.red, { textAlign: 'center' }]}>{val.suc_demon}</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                        :
                                        <></>
                            }

                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Efeitos do objeto</Text>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.howTo}</Text>
                                </View>
                                <View>
                                    {
                                        props.objectType === 'cards' ?
                                            objs.effects?.map((val, index) => {
                                                return (
                                                    <View key={index} style={style.cardsWrapper}>
                                                        <View style={style.cardSingle}>
                                                            <Text style={style.blue}>{val.name}</Text>
                                                        </View>
                                                        <View style={style.cardSingle}>
                                                            <Text style={[style.red, { textAlign: 'right' }]}>{val.effect}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                            :
                                            props.objectType === 'ouija' ?
                                                objs.effects?.map((val, index) => {
                                                    return (
                                                        <View key={index} style={style.cardsWrapper}>
                                                            <Text style={style.blue}>{val.name}</Text>
                                                        </View>
                                                    )
                                                })
                                                :
                                                <View>
                                                    <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.effect}</Text>
                                                </View>

                                    }
                                </View>
                            </View>
                        </View>
                        :
                        <Text>Nada ainda :/</Text>
                }
            </View>
        </ScrollView>
    )
};


export default Objects;