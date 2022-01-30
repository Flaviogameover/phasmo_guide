
import style from '../style/style';
import { Text, View } from 'react-native';

const GhostComponent = (props) => {



    return (
        <View>
            <View>
                <Text
                    style={[{ fontWeight: 'bold' },
                    !props.ghost.isActive ?
                        style.white
                        :
                        (props.darkMode) ? style.titleDark : style.colorLight
                    ]}>
                    {props.ghost.name}
                </Text>
            </View>
            <View style={style.ghostBox}>
                <View style={style.ghostBoxLeft}>
                    {
                        props.ghost.evidence.map((evidence, eviIndex) => {
                            return (
                                <Text key={eviIndex}
                                    style={[!props.ghost.isActive ?
                                        style.white
                                        :
                                        (props.darkMode) ? style.colorDark : style.colorLight]}>
                                    {evidence}
                                </Text>
                            )
                        })
                    }
                </View>
                <View style={style.ghostBoxRight}>
                    <Text style={[!props.ghost.isActive ?
                        style.white
                        :
                        style.red
                        , { textAlign: 'right' }
                    ]}>{props.ghost.strength}</Text>
                    <Text style={[!props.ghost.isActive ?
                        style.white
                        :
                        style.blue
                        , { textAlign: 'right' }
                    ]}>{props.ghost.weakness}</Text>
                </View>
            </View>
        </View>
    )
}


export default GhostComponent;