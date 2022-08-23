import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: 'white',
    },
    lightThemeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    textLightMode: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.25,
        // backgroundColor: 'white',
        color: 'black',
    },
    textLightModeSecondary: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 0.25,
        // backgroundColor: '#FFFFFF',
        color: 'black',
    },
    inputLightMode: {
        fontSize: 42,
        // backgroundColor: 'white',
        lineHeight: 46,
        fontStyle: 'normal',
        color: 'black', 
        height: 50, 
        width: '100%', 
        textAlign: 'center',
        fontWeight: '700',
        outlineStyle: 'none'
    },
    buttonLight: {
        // backgroundColor: 'white',
        color: 'black', 
        height: 50,
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
    },
    textWhiteSM: {
        color: 'black',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
    }
    
});

export default styles;