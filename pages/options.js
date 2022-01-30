import { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import style from '../style/style';


const Options = (props) => {
    const [opcoes, setOpcoes] = useState([
        {
            title: 'Fantasmas',
            tag: 'main',
        },
        {
            title: 'Objetos Amaldiçoados',
            tag: 'cursed'
        },
        {
            title: 'Em Breve',
            tag: 'money'
        },
        /*{
            title: 'Em Breve',
            tag: 'hide'
        },
        {
            title: 'Em Breve',
            tag: 'equipments'
        },
        {
            title: 'Em Breve',
            tag: 'death'
        },*/
    ]);
    

    return (
        <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
            <Text style={[{ textAlign: 'center', fontSize: 30 }, (props.darkMode) ? style.titleDark : style.titleLight]}>Hora da Caçada!</Text>
            <View>
                {
                    opcoes.map((val, index) => {
                        return (
                            <TouchableOpacity style={[style.optionSingle, (props.darkMode) ? style.optionDark : style.optionLight]} key={index} onPress={() => props.changePage(val)}>
                                <Text style={[style.optionSingleText,style.Family, (props.darkMode) ? style.colorDark : style.colorLight]}>{val.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
};



export default Options;