import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 20,
        flex: 1,
        height: '100%',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    buttonSecondary: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#7FDC67',
    },
    textWhite: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
    },
    row1: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        width: '100%',
        // paddingVertical: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    comTextAlign: {
        flex: 1,
        marginTop: 10
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        padding: 10,
    },
    text: {
        fontWeight: '100'
    },
    textGray: {
        color: '#8E8E93',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default styles;