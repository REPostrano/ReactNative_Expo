import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: 'black',
    },
    darkThemeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900',
    },
    textDarkMode: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '900',
        letterSpacing: 0.25,
        backgroundColor: 'black',
        color: 'white',
    },
    textDarkModeSecondary: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        backgroundColor: 'black',
        color: '#d0d0c0',
    },
    inputDarkMode: {
        fontSize: 50, 
        backgroundColor: 'black',
        height: 60, 
        width: '100%', 
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    buttonDark: {
        backgroundColor: 'black',
        color: 'white', 
        height: 60,
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
    }
});

export default styles;