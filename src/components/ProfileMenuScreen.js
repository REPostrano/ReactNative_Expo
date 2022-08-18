import React from 'react';
import styles from '../assets/styles'
import { View, Pressable, Text, useColorScheme, Image } from 'react-native'
import darkStyle from '../assets/darkStyle';
import lightStyle from '../assets/lightStyle';

const NavigatetoSendMoney = props => {
    props.navigation.navigate('Amount')
}

const ProfileMenuScreen = props => {
    const colorScheme = useColorScheme();
    const themeButton = colorScheme === 'dark' ? darkStyle.buttonDark : lightStyle.buttonLight;
    const themeText = colorScheme === 'dark' ? darkStyle.textDark : lightStyle.textWhite;
    const themeTextSecondary = colorScheme === 'dark' ? darkStyle.textDarkModeSecondary : lightStyle.textLightModeSecondary;
    const themeContainerStyle = colorScheme === 'light' ? lightStyle.lightContainer : darkStyle.darkContainer;
    return (
        <View style={[{ paddingTop: 60 }, styles.container, themeContainerStyle]}>
            <Pressable style={[{ flexDirection: 'row', position: 'relative' }, themeButton]} onPress={() => NavigatetoSendMoney(props)}>
                {colorScheme === 'dark' ?
                    <Image source={require('../assets/icon/ic_left_arrow_light.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} /> :
                    <Image source={require('../assets/icon/ic_left_arrow_dark.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} />
                }
                {/* <Text style={[{ marginLeft: 80 }, themeText]}>Back</Text> */}
            </Pressable>

            <View style={[{}, styles.imageContainer]}>
                <Image source={require('../assets/icon/profile.jpg')} style={{ width: 200, height: 200, borderRadius: 120, borderColor: 'white', borderWidth: 1 }} />
                <Text style={[{ paddingTop: 25 }, themeText]}>Maria Callas</Text>
                <Text style={[{ paddingTop: 5 }, themeTextSecondary]}>View Profile</Text>
            </View>
        </View>
    );
}
export default ProfileMenuScreen;