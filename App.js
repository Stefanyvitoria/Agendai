import { StyleSheet, Text, View } from 'react-native';
import colors from './components/Constantes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/Screens/Welcome';
import LoginUm from './components/Screens/LoginUm';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false }}/>
                <Stack.Screen name="LoginUm" component={LoginUm} options={{headerShown: false }}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.color1
    },
});