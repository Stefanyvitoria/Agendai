import { StyleSheet, Text, View } from 'react-native';
import colors from './components/Constantes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/Screens/Welcome';
import LoginUm from './components/Screens/LoginUm';
import LoginDois from './components/Screens/LoginDois';
import EsqueceuSenha from './components/Screens/EsqueceuSenha';
import CadastroUm from './components/Screens/CadastroUM';
import CadastroDois from './components/Screens/CadastroDois';
import HomeCliente from './components/Screens/HomeCliente';
import PrestadorHome from './components/Screens/PrestadorHome';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false }}/>
                <Stack.Screen name="LoginUm" component={LoginUm} options={{headerShown: false }}/>
                <Stack.Screen name="LoginDois" component={LoginDois} options={{headerShown: false }}/>
                <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={{headerShown: false }}/>
                <Stack.Screen name="CadastroUm" component={CadastroUm} options={{headerShown: false }}/>
                <Stack.Screen name="CadastroDois" component={CadastroDois} options={{headerShown: false }}/>
                <Stack.Screen name="HomeCliente" component={HomeCliente} options={{headerShown: false }}/>
                <Stack.Screen name="PrestadorHome" component={PrestadorHome} options={{headerShown: false }}/>
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