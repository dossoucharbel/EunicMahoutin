// Navigation.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignPage from './SignUp';
import LoginPage from './LoginPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inscription">
        <Stack.Screen name="Inscription" component={SignPage} />
        <Stack.Screen name="Connexion" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
