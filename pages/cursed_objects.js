import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import style from '../style/style';



const CursedObjects = (props) => {

    const objects = [
        {
            title: 'Cartas',
            page: 'cards'
        },
        {
            title: 'Ouija',
            page: 'ouija'
        },
        {
            title: 'Caixa de Música',
            page: 'music_box'
        },
        {
            title: 'Em Breve',
            page: 'soon'
        }
    ];

    return (
        <ScrollView>
            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                <Text style={[{ textAlign: 'center', fontSize: 30 }, (props.darkMode) ? style.titleDark : style.colorLight]}>Objetos Amaldiçoados</Text>
                <View style={{ paddingTop: 15, alignItems: 'center' }}>
                    <Text style={[{ fontSize: 15, lineHeight: 25, textAlign: 'justify' }, (props.darkMode) ? style.colorDark : style.colorLight]}>Existem ao todo 6 objetos amaldiçoados, onde apenas 1 irá aparecer aleatóriamente na missão. Cada objeto (com exceção das cartas) irá reduzir bastante sua sanidade e, caso chegue a 0%, o objeto se destrói e uma caçada amaldiçoada se iniciará.</Text>
                </View>
                <View style={{ paddingTop: 25 }}>
                    {
                        objects.map((val, index) => {
                            return (
                                <TouchableOpacity style={[style.optionSingle, (props.darkMode) ? style.optionDark : style.optionLight]} key={index} onPress={() => props.changePage({ title: val.title, page: val.page, tag: 'objects' })} >
                                    <Text style={[style.optionSingleText, (props.darkMode) ? style.colorDark : style.colorLight]}>{val.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
};


export default CursedObjects;