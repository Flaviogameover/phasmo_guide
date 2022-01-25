import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    white: {
        color: '#fff',
        fontWeight: 'bold'
    },
    black: {
        color: '#000',
        fontWeight: 'bold'
    },
    red:{
        color: '#f00',
        fontWeight: 'bold'
    },
    yellow:{
        color: '#0ff',
        fontWeight: 'bold'
    },
    Family: {
        fontFamily: 'Montserrat_400Regular',
    },
    app: {
        flex: 1,
    },
    header: {
        height: 50,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        elevation: 5,
        alignItems: 'center',
    },
    appLight:{
        backgroundColor: '#e0e0e0',
    },
    appDark: {
        backgroundColor: '#1F1F1F'
    },
    bgLight:{
        backgroundColor: '#fff',
    },
    bgDark:{
        backgroundColor: '#121212',
    },
    optionDark:{
        backgroundColor: '#1F1F1F'
    },
    optionLight:{
        backgroundColor: '#fff',
    },
    colorLight:{
        color: '#000'
    },
    colorDark:{
        color: '#CDCDCD',
    },
    evidenceLight:{
        backgroundColor: '#fff',

    },
    evidenceDark:{
        backgroundColor: '#fff',

    },
    headerTitle: {
        fontSize: 22,
        flex: 1,
        textAlign: 'center',
    },
    svgParent: {
    },
    headerSvg: {
        fontSize: 25,
    },
    options: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        margin: 20,
        elevation: 5,
    },
    ghostSingle: {
        padding: 10,
        margin: 10,
        elevation: 5,
        flexDirection: 'row',
    },
    ghostEvidence:{
        flexDirection: 'column',
    },
    ghostBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ghostBoxRight:{
        width: '65%',
        alignItems: 'flex-end'
    },
    ghostBoxLeft:{
        width: '35%',
        alignItems: 'flex-start'
    },
    optionSingle: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
        elevation: 3,
    },
    optionSingleText: {
        fontSize: 25,
        textAlign: 'center',
    },
    cardsWrapper:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 10
    },
    cardSingle:{
        width: '50%'
    },
    evidencesWrapper: {
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    evidenceSingle: {
        padding: 8,
        margin: 5,
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 4,
        borderRadius: 5,
    },
    evidenceSingeText: {
        fontSize: 12,
        paddingHorizontal: 3
    },
    titleTip: {
        fontSize: 13
    }
})

//@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'),
