import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LogBox, View, Alert, BackHandler } from 'react-native';
import style from './style/style';
import Ghosts from './pages/ghosts';
import Options from './pages/options';
import GhostProfile from './pages/ghost_profile';
import CursedObjects from './pages/cursed_objects';
import Objects from './pages/objects';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderComponent from './pages/headerComponent';

export default function App() {
    LogBox.ignoreAllLogs(true);
    const [darkMode, setDarkMode] = useState(true);
    const [currentPage, setCurrentPage] = useState({ title: 'Opções', tag: 'options' });

    const components = (page) => {
        let pages = [
            {
                page: 'main',
                component: <Ghosts darkMode={darkMode} changePage={setCurrentPage} />
            },
            {
                page: 'options',
                component: <Options darkMode={darkMode} changePage={setCurrentPage} />
            },
            {
                page: 'ghost',
                component: <GhostProfile darkMode={darkMode} ghostType={currentPage.type} />
            },
            {
                page: 'cursed',
                component: <CursedObjects darkMode={darkMode} changePage={setCurrentPage} />
            },
            {
                page: 'objects',
                component: <Objects darkMode={darkMode} objectType={currentPage.page} />
            }
        ]

        let result = pages.filter((val) => val.page === page)[0];
        if (result === undefined) {
            return pages[0].component;
        } else {
            return result;
        }
    }



    let [fontsLoaded] = useFonts({ Montserrat_400Regular });


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
                //alert(currentPage.tag)
                setCurrentPage({
                    title: 'Opções',
                    tag: 'options'
                })
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
            <HeaderComponent fontsLoaded={fontsLoaded} darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {

                components(currentPage.tag).component
            }
        </View>
    );
}