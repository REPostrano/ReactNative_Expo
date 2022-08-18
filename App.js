import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './src/assets/styles';
import HomeScreen from './src/components/HomeScreen'
import SendMoneyScreen from './src/components/SendMoneyScreen'
import ProfileMenuScreen from './src/components/ProfileMenuScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Amount" component={SendMoneyScreen} />
        <Stack.Screen name="ProfileMenu" component={ProfileMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

