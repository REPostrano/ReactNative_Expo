import React from 'react';
import styles from '../assets/styles'
import { View, Pressable, Text, useColorScheme, Image, ImageBackground, } from 'react-native'
import darkStyle from '../assets/darkStyle';
import lightStyle from '../assets/lightStyle';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const NavigatetoSendMoney = props => {
    props.navigation.navigate('Amount')
}

const ProfileMenuScreen = props => {
    const colorScheme = useColorScheme();
    const themeButton = colorScheme === 'dark' ? darkStyle.buttonDark : lightStyle.buttonLight;
    const themeText = colorScheme === 'dark' ? darkStyle.textDark : lightStyle.textWhite;
    const themeTextSecondary = colorScheme === 'dark' ? darkStyle.textDarkModeSecondary : lightStyle.textLightModeSecondary;
    const themeContainerDark = colorScheme === 'dark' ? darkStyle.darkContainer : null;
    const themeContainerLight = colorScheme === 'light' ? require('../assets/icon/bg_light.png') : null;
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
    });
    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={[{ height: '100%' }, themeContainerDark, styles.container]}>
            <ImageBackground source={themeContainerLight} resizeMode="cover" style={styles.image}>
                <View style={[{ paddingTop: 48 }]}>
                    <Pressable style={[{ flexDirection: 'row', position: 'relative',  width: '100%' }, themeButton]} onPress={() => NavigatetoSendMoney(props)}>
                        {colorScheme === 'dark' ?
                            <Image source={require('../assets/icon/ic_left_arrow_light.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} /> :
                            <Image source={require('../assets/icon/ic_left_arrow_dark.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} />
                        }
                        <Text style={[{ marginLeft: 80 }, themeText]}>Back</Text>
                    </Pressable>
                </View>

                <View style={[{}, styles.imageContainer]}>
                    <Image source={require('../assets/icon/profile.png')} style={{ width: 200, height: 200, borderRadius: 120, }} />
                    <Text style={[{ paddingTop: 25, fontFamily: 'Poppins_600SemiBold' }, themeText]}>Maria Callas</Text>
                    <Text style={[{ paddingTop: 5, fontFamily: 'Poppins_400Regular' }, themeTextSecondary]}>View Profile</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ProfileMenuScreen;