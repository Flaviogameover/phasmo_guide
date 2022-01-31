import { Data } from './data';
import { View, Text, ScrollView } from 'react-native';
import style from '../style/style';

const GhostProfile = (props) => {

    const ghostInfo = Data(props.ghostType);
    return (
        <ScrollView>
            <View>
                {
                    ghostInfo ?
                        <View >
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>{ghostInfo.name}</Text>
                                <Text style={[{ fontSize: 20, textAlign: 'center', padding: 25 }, (props.darkMode) ? style.titleDark : style.colorLight]}>{ghostInfo.evidence.join(', ')}</Text>
                                <View style={{ paddingTop: 5 }}>
                                    <Text style={[style.textInfo, (props.darkMode) ? style.colorDark : style.colorLight]}>{ghostInfo.info}</Text>
                                </View>
                            </View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                    <Text style={[{ fontSize: 20, textAlign: 'center', padding: 5 }, (props.darkMode) ? style.titleDark : style.colorLight]}>{ghostInfo.strength}</Text>
                                    <Text style={[{ fontSize: 20, textAlign: 'center', padding: 5 }, (props.darkMode) ? style.titleDark : style.colorLight]}>{ghostInfo.weakness}</Text>
                            </View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Características</Text>
                                {
                                    ghostInfo.traits?.map((val, index) => {
                                        return (
                                            <View key={index} style={{ padding: 20 }}>
                                                <Text style={[style.textInfo, (props.darkMode) ? style.titleDark : style.titleLight]}>► <Text style={[{ fontSize: 15 }, (props.darkMode) ? style.colorDark : style.colorLight]}>{val}</Text></Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={[style.options, (props.darkMode) ? style.bgDark : style.bgLight]}>
                                <Text style={[style.optionSingleText, { textAlign: 'left' }, (props.darkMode) ? style.titleDark : style.colorLight]}>Estratégias</Text>
                                {
                                    ghostInfo.strategies?.map((val, index) => {
                                        return (
                                            <View key={index} style={{ padding: 20 }}>
                                                <Text  style={[style.textInfo, (props.darkMode) ? style.titleDark : style.titleLight]}>► <Text style={[{ fontSize: 15 }, (props.darkMode) ? style.colorDark : style.colorLight]}>{val}</Text></Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        :
                        <Text>Nada ainda :/</Text>
                }
            </View>
        </ScrollView>
    )
};

export default GhostProfile;