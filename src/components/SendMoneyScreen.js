import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, useColorScheme, ScrollView, Pressable, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import styles from '../assets/styles'
import OptionsMenu from "react-native-menu-platform";
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import darkStyle from '../assets/darkStyle';
import lightStyle from '../assets/lightStyle';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const NavigatetoHome = props => {
    props.navigation.navigate('Home')
}

const NavigatetoProfileMenu = props => {
    props.navigation.navigate('ProfileMenu')
}

const SendMoneyScreen = props => {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'dark' ? darkStyle.darkThemeText : lightStyle.lightThemeText;
    const themeTextPrimary = colorScheme === 'dark' ? darkStyle.textDarkMode : lightStyle.textLightMode;
    const themeTextSecondary = colorScheme === 'dark' ? darkStyle.textDarkModeSecondary : lightStyle.textLightModeSecondary;
    const themeInputStyle = colorScheme === 'dark' ? darkStyle.inputDarkMode : lightStyle.inputLightMode;
    const themeButton = colorScheme === 'dark' ? darkStyle.buttonDark : lightStyle.buttonLight;
    const themeText = colorScheme === 'dark' ? darkStyle.textDark : lightStyle.textWhite;
    const themeTextXL = colorScheme === 'dark' ? darkStyle.textXLDark : lightStyle.textXLWhite;
    const themeTextSM = colorScheme === 'dark' ? darkStyle.textDarkSM : lightStyle.textWhiteSM;
    const themeContainerDark = colorScheme === 'dark' ? darkStyle.darkContainer : null;
    const themeContainerLight = colorScheme === 'light' ? require('../assets/icon/bg_light.png') : null;
    const MoreIcon = colorScheme === 'dark' ? require('../assets/icon/ic_dots_light.png') : require('../assets/icon/ic_dots_dark.png');
    const editPost = () => {
    }
    const viewPost = () => {
    }

    const [isInitialValue, setIsInitialValue] = useState(0.00);
    const [isAvailable, setAvailableValue] = useState(3150.70);

    const sendMoney = () => {
        let commission = isInitialValue * (0.10);
        let amount = isInitialValue - commission;
        let total = amount + isAvailable;
        setAvailableValue(total);
        setIsInitialValue(0.00);
    }

    const [orientation, setOrientation] = useState('LANDSCAPE');
    const determineAndSetOrientation = () => {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;

        if (width < height) {
            setOrientation('PORTRAIT');
        } else {
            setOrientation('LANDSCAPE');
        }
    }

    useEffect(() => {
        determineAndSetOrientation();
        Dimensions.addEventListener('change', determineAndSetOrientation);
        return () => {
            Dimensions.addEventListener('change', determineAndSetOrientation)
        }
    }, []);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView style={[{ height: '100%' }, themeContainerDark]}>
            <ImageBackground source={themeContainerLight} resizeMode="cover" style={styles.image}>
                <View style={[{ paddingTop: 48 }]}>
                    <Pressable style={[{ flexDirection: 'row', position: 'relative', width: '100%' }, themeButton]} onPress={() => NavigatetoHome(props)}>
                        {colorScheme === 'dark' ?
                            <Image source={require('../assets/icon/ic_left_arrow_light.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} /> :
                            <Image source={require('../assets/icon/ic_left_arrow_dark.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} />
                        }
                        <Text style={[{ marginLeft: 80 }, themeText]}>Amount</Text>
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity onPress={() => NavigatetoProfileMenu(props)}>
                                <Image source={require('../assets/icon/profile.png')} style={{ width: 70, height: 70, borderRadius: 40, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={[{ fontFamily: 'Poppins_600SemiBold' }, themeTextPrimary]}>Marija Callas</Text>
                            <View style={styles.row1}>
                                <Text style={[{ fontFamily: 'Poppins_400Regular' }, themeTextSecondary]}>5812 9023 8431 323</Text>
                                <Image source={require('../assets/icon/master-card.png')} style={{ width: 40, height: 40 }} />
                            </View>
                        </View>

                        <View>
                            <OptionsMenu
                                button={MoreIcon}
                                buttonStyle={{ width: 30, height: 55, margin: 7.5, resizeMode: "contain", fontFamily: 'Poppins_600SemiBold' }}
                                destructiveIndex={1}
                                options={["Edit Profile", "View Profile", "Cancel"]}
                                actions={[editPost, viewPost]} />
                        </View>
                    </View>
                    
                    <View style={[{ marginTop: orientation == 'PORTRAIT' ? 155 : 0 }, styles.content]}>
                        <Text style={[{ fontFamily: 'Poppins_400Regular' }, styles.textGray]}>
                            Available:
                            <Text style={themeTextSM}> ₱ {isAvailable}</Text>
                        </Text>
                        <TextInput placeholderTextColor="#8f8e94" placeholder='₱ 0.00' onChangeText={setIsInitialValue} value={isInitialValue} keyboardType='numeric'
                            style={[{ marginTop: 5, }, themeInputStyle]} />
                        {/* <Text style={themeTextXL}> $ 1360<Text style={[{ color: '#8f8e94' }, styles.text]}>.00</Text></Text> */}

                        <Text style={[{ fontFamily: 'Poppins_400Regular' }, styles.textGray, styles.comTextAlign]}>Commission:
                            <Text style={themeTextSM}> ₱ {(isInitialValue * (0.10)).toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>

                <View>
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        colors={['rgba(203, 214, 27, 1)', 'rgba(50, 215, 75, 1)']}
                        style={styles.buttonSecondary}>
                        <Pressable style={{ flexDirection: 'row', position: 'relative', width: '100%' }} onPress={sendMoney}>
                            <Text style={[{ flex: 2, textAlign: 'center', fontFamily: 'Poppins_600SemiBold' }, themeTextStyle]}>Send Money</Text>
                            <Image source={require('../assets/icon/ic_arrow.png')} style={{ width: 25, height: 25, right: 20, position: 'absolute' }} />
                        </Pressable>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}


export default SendMoneyScreen;