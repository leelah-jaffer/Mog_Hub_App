import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    logo: {
        width: 350,
        height: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainTxt: {
        paddingTop: 50,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },

    slogan: {
        color: 'orange',
        fontSize: 30,
        textAlign: 'center'

    },

    inputFlex: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-evenly',
    },

    enterTxt: {
        fontWeight: 'bold',
    },

    userInputTxt: {
        borderBottomWidth: 1
    },

    


})

export default styles;
