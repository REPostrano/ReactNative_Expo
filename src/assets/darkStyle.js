import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: 'black',
    },
    darkThemeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    textDarkMode: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.25,
        backgroundColor: 'black',
        color: 'white',
    },
    textDarkModeSecondary: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 0.25,
        backgroundColor: 'black',
        color: '#FFFFFF',
    },
    inputDarkMode: {
        fontSize: 42, 
        backgroundColor: 'black',
        lineHeight: 46,
        fontStyle: 'normal',
        height: 50, 
        width: '100%', 
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        outlineStyle: 'none'
    },
    buttonDark: {
        backgroundColor: 'black',
        color: 'white', 
        height: 50,
        width: '100%',
    },
    textDark: {
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textXLDark: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    textDarkSM: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
    }
   
});

export default styles;