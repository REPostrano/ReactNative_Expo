import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, useColorScheme, ScrollView, Pressable, TouchableOpacity, Alert, Modal, Platform } from 'react-native'
import styles from '../assets/styles'
import OptionsMenu from "react-native-menu-platform";
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import darkStyle from '../assets/darkStyle';
import lightStyle from '../assets/lightStyle';
import { StatusBar } from 'expo-status-bar';

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

    const themeContainerStyle = colorScheme === 'dark' ? darkStyle.darkContainer : lightStyle.lightContainer;
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
        setIsInitialValue(0);
    }

    return (
        <SafeAreaView style={[{ height: '100%' }, themeContainerStyle]}>
            <StatusBar />
            <View style={[{ paddingTop: 60 }]}>
                <Pressable style={[{ flexDirection: 'row', position: 'relative' }, themeButton]} onPress={() => NavigatetoHome(props)}>
                    {colorScheme === 'dark' ?
                        <Image source={require('../assets/icon/ic_left_arrow_light.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} /> :
                        <Image source={require('../assets/icon/ic_left_arrow_dark.png')} style={{ width: 25, height: 25, left: 20, position: 'absolute' }} />
                    }
                    <Text style={[{ marginLeft: 80 }, themeText]}>Amount</Text>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.container, { height: 400, }]}>
                    <View style={styles.row}>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity onPress={() => NavigatetoProfileMenu(props)}>
                                <Image source={require('../assets/icon/profile.jpg')} style={{ width: 70, height: 70, borderRadius: 40, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={themeTextPrimary}>Maria Callas</Text>
                            <View style={styles.row1}>
                                <Text style={themeTextSecondary}>5812 9023 8431 323</Text>
                                <Image source={require('../assets/icon/master-card.png')} style={{ width: 40, height: 40 }} />
                            </View>
                        </View>

                        <View>
                            <OptionsMenu
                                button={MoreIcon}
                                buttonStyle={{ width: 30, height: 55, margin: 7.5, resizeMode: "contain" }}
                                destructiveIndex={1}
                                options={["Edit Profile", "View Profile", "Cancel"]}
                                actions={[editPost, viewPost]} />
                        </View>
                    </View>

                    <View style={[{ marginTop: 130, }, styles.content]}>
                        <Text style={themeTextSecondary}>
                            Available:
                            <Text style={themeTextPrimary}> $ {isAvailable}</Text>
                        </Text>
                        <TextInput placeholderTextColor="#E1E1E1" placeholder='$ 0.00' onChangeText={setIsInitialValue} value={isInitialValue} keyboardType='numeric'
                            style={[{ marginTop: 5}, themeInputStyle]} /> 
                        {/* <Text style={themeTextXL}> $ 1360<Text style={[{ color: '#8f8e94' }, styles.text]}>.00</Text></Text> */}
                        
                        <Text style={[themeTextSecondary, styles.comTextAlign]}>Commission:
                            <Text style={themeTextPrimary}> $ {(isInitialValue * (0.10)).toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#ffed00', '#1fff42']}
                    style={styles.buttonSecondary}>
                    <Pressable style={{ flexDirection: 'row', position: 'relative', width: '100%' }} onPress={sendMoney}>
                        <Text style={[{ flex: 2, textAlign: 'center', }, themeTextStyle]}>Send Money</Text>
                        <Image source={require('../assets/icon/ic_arrow.png')} style={{ width: 25, height: 25, right: 20, position: 'absolute' }} />
                    </Pressable>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
}

export default SendMoneyScreen;