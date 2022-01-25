import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LogBox, Text, View, TouchableOpacity, Alert, BackHandler, useFocusEffect } from 'react-native';
import style from './style/style';
import MainPage from './pages/main_page';
import Options from './pages/options';
import GhostProfile from './pages/ghost_profile';
import CursedObjects from './pages/cursed_objects';
import Objects from './pages/objects';
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [currentPage, setCurrentPage] = useState({ title: 'Opções', tag: 'options' });
    let [fontsLoaded] = useFonts({ Montserrat_400Regular });
    LogBox.ignoreAllLogs(true);

    useEffect(() => {
        const load_data = async () => {
            let data = await _get_data();
            if (data !== null) {
                setDarkMode(data);
            }
        }
        load_data();
    }, []);

    useEffect(async () => {
        await _set_data();
    }, [darkMode]);

    const _get_data = async () => {
        try {

            let data = await AsyncStorage.getItem('darkmode');

            data = JSON.parse(data);

            return data;

        } catch (error) {

        }
    }
    const _set_data = async () => {
        try {
            let dataJson = JSON.stringify(darkMode)
            await AsyncStorage.setItem('darkmode', dataJson);
        } catch (e) {
            // saving error
        }
    };

    const handleAlert = () => {
        /*Alert.alert(
            "Se fodeu irmão!",
            "Infelizmente irei roubar todas as informações do seu banco cadastrado no seu aparelho :/ \n\n\nObs: Se fechar o app eu robo 2x!",
            [
                {
                    text: "Aceitar",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "Aceitar com vontade", onPress: () => console.log("OK Pressed") }
            ]
        );*/
    };

    useEffect(() => {
        const trocarPagina = () => {

            if (currentPage.tag === 'objects') {
                setCurrentPage({
                    title: 'Objetos Amaldiçoados',
                    tag: 'cursed'
                });
            } else if (currentPage.tag === 'cursed' || currentPage.tag === 'main') {
                setCurrentPage({
                    title: 'Opções',
                    tag: 'options'
                });
            } else if (currentPage.tag === 'ghost') {
                setCurrentPage({
                    title: 'Fantasmas',
                    tag: 'main'
                })
            } else if (currentPage.tag === 'options') {
                Alert.alert('Opa!', `Tem certeza que deseja sair ?`, [
                    {
                        text: 'Cancelar',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'Sair', onPress: () => BackHandler.exitApp() },
                ]);
            } else {
                alert(currentPage.tag)
            }


            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', trocarPagina);

        return () => backHandler.remove();
    }, [currentPage]);



    if (!fontsLoaded) {
        return (
            <AppLoading />
        );
    }


    return (
        <View style={[style.app, (darkMode) ? style.appDark : style.appLight]}>
            <StatusBar hidden />
            <View style={[style.header, (darkMode) ? style.bgDark : style.bgLight]}>
                {
                    currentPage.tag !== 'options' ?
                        <TouchableOpacity style={style.svgParent} onPress={() => setCurrentPage(() => {
                            if (currentPage.tag === 'ghost') {
                                return { title: 'Fantasmas', tag: 'main' }
                            }
                            else if (currentPage.tag === 'objects') {
                                return { title: 'Objetos Amaldiçoados', tag: 'cursed' }
                            }
                            else {
                                return { title: 'Opções', tag: 'options' }
                            }
                        })}>
                            <Icon style={[style.headerSvg, (darkMode) ? style.colorDark : style.colorLight]}
                                name="arrow-back"
                                color={(darkMode) ? '#cdcdcd' : '#000'}
                                size={45}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={style.svgParent} onLongPress={() => handleAlert()} onPress={() => setDarkMode(!darkMode)}>
                            <Icon style={style.headerSvg}
                                name={(darkMode ? 'sunny' : 'moon')}
                                color={(darkMode) ? '#cdcdcd' : '#000'}
                                size={45}
                            />
                        </TouchableOpacity>
                }

                <Text style={[style.Family, style.headerTitle, (darkMode) ? style.colorDark : style.colorLight]}>{currentPage.title}</Text>
            </View>
            {
                currentPage.tag === 'main' ?
                    <MainPage darkMode={darkMode} changePage={setCurrentPage} />
                    :
                    currentPage.tag === 'options' ?
                        <Options darkMode={darkMode} changePage={setCurrentPage} />
                        :
                        currentPage.tag === 'ghost' ?
                            <GhostProfile darkMode={darkMode} ghostType={currentPage.type} />
                            :
                            currentPage.tag === 'cursed' ?
                                <CursedObjects darkMode={darkMode} changePage={setCurrentPage} />
                                :
                                currentPage.tag === 'objects' ?
                                    <Objects darkMode={darkMode} objectType={currentPage.page} />
                                    :
                                    <></>
            }
        </View>
    );
}