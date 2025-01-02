import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Home() {
  const navigation = useNavigation();

  console.log('Home component rendered');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Track and Accomplish more</Text>
      <Text style={styles.title}></Text>
      
      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Sign in button pressed');
          navigation.navigate('SignIn');
          console.log(navigation.getState());
        }}
        
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => {
          console.log('Sign up button pressed');
          navigation.navigate('SignUp')
        }}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00847C', // Replace with your teal color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust based on your design
    height: 100,
    marginBottom: 180,
  },
  title: {
    fontSize: 65,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 40,

  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#00796b',
    fontWeight: 'bold',
    fontSize: 25,
  },
  signUpButton: {
    backgroundColor: '#fff', // Same style as the sign-in button
  },
});