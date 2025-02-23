import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Login_Page from './LoginPage';
import SignUp from './SignUp';
import MainPage from './MainPage';

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