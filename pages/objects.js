import Data from './data';
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
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.name}</Text>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={[{ fontSize: 15, lineHeight: 25 }, (props.darkMode) ? style.colorDark : style.colorLight]}>{objs.info}</Text>
                                </View>
                            </View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.colorDark : style.colorLight]}>Efeitos</Text>
                                <View>
                                    {
                                        props.objectType === 'cards' &&
                                        objs.effects?.map((val, index) => {
                                            return (
                                                <View key={index} style={style.cardsWrapper}>
                                                    <View style={style.cardSingle}>
                                                        <Text style={style.yellow}>{val.name}</Text>
                                                    </View>
                                                    <View style={style.cardSingle}>
                                                        <Text style={style.red}>{val.effect}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
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