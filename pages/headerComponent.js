import React from 'react';
import style from '../style/style';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const HeaderComponent = (props) => {



    return (
        <View style={[style.header, (props.darkMode) ? style.bgDark : style.headerLight]}>
            {
                props.currentPage.tag !== 'options' &&
                <TouchableOpacity onPress={() => props.setCurrentPage(() => {
                    if (props.currentPage.tag === 'ghost') {
                        return { title: 'Fantasmas', tag: 'main' }
                    }
                    else if (props.currentPage.tag === 'objects') {
                        return { title: 'Objetos Amaldiçoados', tag: 'cursed' }
                    }
                    else {
                        return { title: 'Opções', tag: 'options' }
                    }
                })}>
                    <Icon style={[style.headerSvg, (props.darkMode) ? style.colorDark : style.colorLight]}
                        name="arrow-back"
                    />
                </TouchableOpacity>


            }

            <Text style={[style.Family, style.headerTitle, (props.darkMode) ? style.titleDark : style.colorLight]}>{props.currentPage.title}</Text>
            <TouchableOpacity onPress={() => props.setDarkMode(!props.darkMode)}>
                <Icon style={[style.headerSvg ,(props.darkMode) ? style.colorDark : style.colorLight]}
                    name={(props.darkMode ? 'sunny' : 'moon')}         
                />
            </TouchableOpacity>
        </View>
    )
};

export default HeaderComponent;