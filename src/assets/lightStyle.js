import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: 'white',
    },
    lightThemeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    textLightMode: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '900',
        letterSpacing: 0.25,
        backgroundColor: 'white',
        color: 'black',
    },
    textLightModeSecondary: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        backgroundColor: 'white',
        color: 'black',
    },
    inputLightMode: {
        fontSize: 50,
        backgroundColor: 'white',
        color: 'black', 
        height: 60, 
        width: '100%', 
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonLight: {
        backgroundColor: 'white',
        color: 'black', 
        height: 60,
        width: '100%',
    },
    textWhite: {
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    textXLWhite: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
    }
});

export default styles;