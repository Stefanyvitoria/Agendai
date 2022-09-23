import { StyleSheet, Text, View } from 'react-native';
import colors from './components/Constantes';
import WelcomeScreen from './components/Screens/Welcome';

export default function App() {
  return (
      <WelcomeScreen />
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