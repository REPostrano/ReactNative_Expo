import React from 'react';
import { View, Pressable, Text, useColorScheme, Platform, ImageBackground } from 'react-native'
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
    const themeTextStyle = colorScheme === 'dark' ? darkStyle.darkThemeText : lightStyle.lightThemeText;
    const themeContainerDark = colorScheme === 'dark' ? darkStyle.darkContainer : null;
    const themeContainerLight = colorScheme === 'light' ? require('../assets/icon/bg_light.png') : null;

    return (
        <View style={[themeContainerDark, styles.container]}>
            <ImageBackground source={themeContainerLight} resizeMode="cover" style={[{alignItems: 'center', justifyContent: 'center', padding: 20}, styles.image]}>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['rgba(203, 214, 27, 1)', 'rgba(50, 215, 75, 1)']}
                    style={styles.buttonSecondary}>
                    <Pressable style={{ width: '100%' }} onPress={() => NavigatetoSendMoney(props)}>
                        <Text style={[{ textAlign: 'center', }, styles.textWhite]}>Go to Send Money</Text>
                    </Pressable>
                </LinearGradient>
                <StatusBar />
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;




