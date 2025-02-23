import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importation des pages
import Welcome from './Welcome';    // Ajouter ce composant si nécessaire
import Login_Page from './LoginPage'; // Assurez-vous que le chemin est correct
import SignUp from './SignUp';
import MainPage from './MainPage';   // Exemple d'une autre page, crée-la si nécessaire

// Création du Stack Navigator
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="login" component={Login_Page} />
                <Stack.Screen name="sign" component={SignUp} />
                <Stack.Screen name="main" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }