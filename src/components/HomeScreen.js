import React from 'react';
import { View, Pressable, Text, useColorScheme, Modal } from 'react-native'
import styles from '../assets/styles'
import { LinearGradient } from 'expo-linear-gradient';
import darkStyle from '../assets/darkStyle';
import lightStyle from '../assets/lightStyle';
import { StatusBar } from 'expo-status-bar';
const NavigatetoSendMoney = props => {
    props.navigation.navigate('Amount')
}

const HomeScreen = props => {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? lightStyle.lightThemeText : darkStyle.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? lightStyle.lightContainer : darkStyle.darkContainer;


    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', padding: 20 }, styles.container, themeContainerStyle]}>
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['rgba(203, 214, 27, 1)', 'rgba(50, 215, 75, 1)']}
                style={styles.buttonSecondary}>
                <Pressable style={{ width: '100%'}} onPress={() => NavigatetoSendMoney(props)}>
                    <Text style={[{textAlign: 'center',}, styles.textWhite]}>Go to Send Money</Text>
                </Pressable>
            </LinearGradient>
            <StatusBar />
        </View>
    );
}

export default HomeScreen;