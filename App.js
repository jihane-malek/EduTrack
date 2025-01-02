import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/screens/Home';
import SignIn from './app/screens/SignIn'; // Ensure this import is correct
import SignUp from './app/screens/SignUp'; // Ensure this import is correct

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} /> {/* Ensure this is defined */}
        <Stack.Screen name="SignUp" component={SignUp} /> {/* Ensure this is defined */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}